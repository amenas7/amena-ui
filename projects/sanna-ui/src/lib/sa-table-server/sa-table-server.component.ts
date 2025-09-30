import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy, ContentChild, TemplateRef, QueryList, ViewChildren, ViewChild, ContentChildren, AfterViewInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { SaColumnDefDirective } from '../sa-table/sa-column-def.directive';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
  noFilter?: boolean;
}

export interface TableData {
  [key: string]: any;
}

export interface ServerPaginationData {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  currentItemsCount: number;
}

export interface ServerPaginationOptions {
  itemsPerPageOptions: number[];
  showItemsPerPageSelector: boolean;
  showPageInfo: boolean;
}

export interface ServerTableRequest {
  pageNumber: number;
  rowsPerPage: number;
  searchTerm?: string;
  sortColumn?: string;
  sortDirection?: 'asc' | 'desc';
  filters?: { [key: string]: any };
}

export interface ServerTableResponse<T = TableData> {
  data: T[];
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
}

@Component({
  selector: 'sa-table-server',
  templateUrl: './sa-table-server.component.html',
  styleUrls: ['./sa-table-server.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SaTableServerComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  private resizeListener: (() => void) | null = null;
  
  constructor(private cdr: ChangeDetectorRef) {}
  
  // Arrays/objetos que siempre usan property binding
  @Input() columns: TableColumn[] = [];
  @Input() data: TableData[] = [];
  
  // Solo emptyMessage usa property binding con comillas simples: [emptyMessage]="'texto'"
  @Input() emptyMessage: string = 'No hay datos disponibles';

  // Templates dinámicos por columna usando ContentChildren
  @ContentChildren(SaColumnDefDirective) columnDefs?: QueryList<SaColumnDefDirective>;
  @ViewChild('defaultCellTemplate', { static: true }) defaultCellTemplate?: TemplateRef<any>;
  
  // Propiedades con setters/getters para flexibilidad máxima
  private _loading: boolean = false;
  private _showFirstLastButtons: boolean = true;


  @Input()
  set loading(value: boolean | any) {
    this._loading = value === true || value === 'true';
  }
  get loading(): boolean {
    return this._loading;
  }

  @Input()
  set showFirstLastButtons(value: boolean | any) {
    this._showFirstLastButtons = value === true || value === 'true';
  }
  get showFirstLastButtons(): boolean {
    return this._showFirstLastButtons;
  }


  // Propiedades específicas de server-side pagination
  @Input() paginationData: ServerPaginationData = {
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    currentItemsCount: 0
  };

  @Input() paginationOptions: ServerPaginationOptions = {
    itemsPerPageOptions: [10, 25, 50, 100],
    showItemsPerPageSelector: true,
    showPageInfo: true
  };

  @Input() autoLoad: boolean = true;
  @Input() minWidth: string = '600px';
  @Input() minTableHeight: number = 200; // ✅ Altura mínima en píxeles (~5 filas aprox)

  // Eventos para server-side
  @Output() loadData = new EventEmitter<ServerTableRequest>();
  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<{column: string, direction: 'asc' | 'desc'}>();
  @Output() rowClick = new EventEmitter<TableData>();
  @Output() rowDoubleClick = new EventEmitter<TableData>();

  // Estados internos
  selectedRow: TableData | null = null;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  
  // ✅ Control de estados de carga
  private _hasInitialLoad: boolean = false;

  ngOnInit(): void {
    if (this.autoLoad) {
      // ✅ Activar loading automáticamente en primera carga
      this._loading = true;
      this.requestData();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // ✅ Detectar cuando llegan datos por primera vez
    if (changes['data'] && changes['data'].currentValue?.length > 0) {
      this._hasInitialLoad = true;
    }
    
    if (changes['paginationData'] && !changes['paginationData'].firstChange) {
      this.cdr.detectChanges();
    }
  }

  ngAfterViewInit(): void {
    // Detectar cambios después de inicializar vistas
    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  /**
   * Solicita datos al servidor
   */
  requestData(): void {
    const request: ServerTableRequest = {
      pageNumber: this.paginationData.currentPage,
      rowsPerPage: this.paginationData.itemsPerPage,
      sortColumn: this.sortColumn || undefined,
      sortDirection: this.sortDirection
    };

    this.loadData.emit(request);
  }

  /**
   * Cambio de página
   */
  onPageChange(page: number): void {
    if (page >= 1 && page <= this.getTotalPages()) {
      this.paginationData.currentPage = page;
      this.pageChange.emit(page);
      this.requestData();
    }
  }

  /**
   * Página anterior
   */
  onPreviousPage(): void {
    if (this.paginationData.currentPage > 1) {
      this.onPageChange(this.paginationData.currentPage - 1);
    }
  }

  /**
   * Página siguiente
   */
  onNextPage(): void {
    const totalPages = this.getTotalPages();
    if (this.paginationData.currentPage < totalPages) {
      this.onPageChange(this.paginationData.currentPage + 1);
    }
  }

  /**
   * Cambio de elementos por página
   */
  onItemsPerPageChange(newItemsPerPage: number): void {
    this.paginationData.itemsPerPage = newItemsPerPage;
    this.paginationData.currentPage = 1; // Reset a la primera página
    this.itemsPerPageChange.emit(newItemsPerPage);
    this.requestData();
  }

  /**
   * Cambio de ordenamiento
   */
  onSort(column: string): void {
    if (!this.isColumnSortable(column)) return;

    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.sortChange.emit({ column: this.sortColumn, direction: this.sortDirection });
    this.paginationData.currentPage = 1; // Reset a la primera página
    this.requestData();
  }


  /**
   * Click en fila
   */
  onRowClick(row: TableData): void {
    this.selectedRow = row;
    this.rowClick.emit(row);
  }

  /**
   * Doble click en fila
   */
  onRowDoubleClick(row: TableData): void {
    this.rowDoubleClick.emit(row);
  }

  /**
   * Obtiene el template para una columna específica
   */
  getColumnTemplate(columnKey: string): TemplateRef<any> | null {
    if (!this.columnDefs) return this.defaultCellTemplate || null;
    
    const columnDef = this.columnDefs.find(def => def.columnKey === columnKey);
    return columnDef ? columnDef.templateRef : (this.defaultCellTemplate || null);
  }

  /**
   * Verifica si una columna es ordenable
   */
  isColumnSortable(columnKey: string): boolean {
    const column = this.columns.find(col => col.key === columnKey);
    return column?.sortable === true;
  }


  /**
   * Obtiene el total de páginas
   */
  getTotalPages(): number {
    return Math.ceil(this.paginationData.totalItems / this.paginationData.itemsPerPage);
  }

  /**
   * Obtiene el icono de ordenamiento
   */
  getSortIcon(columnKey: string): string {
    if (!this.isColumnSortable(columnKey)) return '';
    if (this.sortColumn !== columnKey) return 'fas fa-sort';
    return this.sortDirection === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down';
  }

  /**
   * Obtiene las clases CSS para la fila
   */
  getRowClasses(row: TableData): string {
    let classes = 'cursor-pointer';
    if (this.selectedRow === row) classes += ' selected-row';
    return classes;
  }

  /**
   * Recargar datos
   */
  reload(): void {
    this.requestData();
  }


  /**
   * Verifica si debe usar layout fijo o automático
   */
  get shouldUseFixedLayout(): boolean {
    return this.columns.some(col => col.width);
  }

  /**
   * Obtiene el contexto para templates
   */
  getTemplateContext(row: TableData, column: TableColumn): any {
    return { row, column };
  }

  /**
   * Función trackBy para optimizar renderizado
   */
  trackByFn(index: number, item: TableData): any {
    return item['id'] || index;
  }

  /**
   * Obtiene el elemento inicial de la página actual
   */
  getStartItem(): number {
    if (this.paginationData.totalItems === 0) return 0;
    return (this.paginationData.currentPage - 1) * this.paginationData.itemsPerPage + 1;
  }

  /**
   * Obtiene el elemento final de la página actual
   */
  getEndItem(): number {
    const startItem = this.getStartItem();
    if (startItem === 0) return 0;
    return Math.min(startItem + this.paginationData.currentItemsCount - 1, this.paginationData.totalItems);
  }

  /**
   * ✅ Calcula la altura mínima del tbody
   */
  getTableBodyMinHeight(): number {
    // Siempre mantener altura mínima cuando no hay datos (inicial o vacío)
    if (this.data.length === 0) {
      return this.minTableHeight;
    }
    return 0; // Altura automática cuando hay datos
  }

  /**
   * ✅ Getter para usar en template
   */
  get hasInitialLoad(): boolean {
    return this._hasInitialLoad;
  }
}
