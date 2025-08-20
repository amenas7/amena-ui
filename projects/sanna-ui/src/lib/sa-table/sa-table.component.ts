import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy, ContentChild, TemplateRef, QueryList, ViewChildren, ViewChild, ContentChildren, AfterViewInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { SaColumnDefDirective } from './sa-column-def.directive';

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

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  startItem: number;
  endItem: number;
}

@Component({
  selector: 'sa-table',
  templateUrl: './sa-table.component.html',
  styleUrls: ['./sa-table.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SaTableComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
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
  private _itemsPerPage: number = 5;
  private _showPagination: boolean = true;
  private _showItemsPerPage: boolean = true;
  private _showTotal: boolean = true;
  private _hover: boolean = false;
  private _loading: boolean = false;
  private _showFirstLastButtons: boolean = true;
  private _showFilters: boolean = false;

  @Input()
  set itemsPerPage(value: number | any) {
    this._itemsPerPage = value != null ? +value : 5;
  }
  get itemsPerPage(): number {
    return this._itemsPerPage;
  }

  @Input()
  set showPagination(value: boolean | any) {
    this._showPagination = value === true || value === 'true';
  }
  get showPagination(): boolean {
    return this._showPagination;
  }

  @Input()
  set showItemsPerPage(value: boolean | any) {
    this._showItemsPerPage = value === true || value === 'true';
  }
  get showItemsPerPage(): boolean {
    return this._showItemsPerPage;
  }

  @Input()
  set showTotal(value: boolean | any) {
    this._showTotal = value === true || value === 'true';
  }
  get showTotal(): boolean {
    return this._showTotal;
  }

  @Input()
  set hover(value: boolean | any) {
    this._hover = value === true || value === 'true';
  }
  get hover(): boolean {
    return this._hover;
  }

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

  @Input()
  set showFilters(value: boolean | any) {
    this._showFilters = value === true || value === 'true';
  }
  get showFilters(): boolean {
    return this._showFilters;
  }

  // Propiedad para el ancho mínimo de la tabla
  private _minWidth: string = '600px';
  
  @Input()
  set minWidth(value: string | any) {
    this._minWidth = value || '600px';
  }
  get minWidth(): string {
    return this._minWidth;
  }

  @Output() pageChange = new EventEmitter<number>();
  @Output() itemsPerPageChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<{column: string, direction: 'asc' | 'desc'}>();
  @Output() rowClick = new EventEmitter<TableData>();
  @Output() rowDoubleClick = new EventEmitter<TableData>();
  @Output() filterChange = new EventEmitter<{[column: string]: string}>();

  currentPage: number = 1;
  currentSort: {column: string, direction: 'asc' | 'desc'} | null = null;
  paginationInfo: PaginationInfo = {
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: this._itemsPerPage,
    startItem: 0,
    endItem: 0
  };

  paginatedData: TableData[] = [];
  itemsPerPageOptions: number[] = [5, 10, 25, 50, 100];
  
  // Propiedad para controlar la animación
  animationKey: number = 0;

  // Propiedad para acceder a Array desde el template
  Array = Array;
  
  // Propiedad para acceder a Object desde el template
  Object = Object;

  // Propiedad para la fila seleccionada
  selectedRow: TableData | null = null;
  
  // Propiedades para filtros
  columnFilters: {[key: string]: string} = {};
  filteredData: TableData[] = [];

  ngOnInit(): void {
    // Asegurar que el itemsPerPage esté sincronizado con paginationInfo
    this.paginationInfo.itemsPerPage = this.itemsPerPage;
    
    // Resetear a la primera página al inicializar
    this.currentPage = 1;
    
    this.applyFilters();
    this.updatePagination();
    this.setupResizeListener();
  }

  ngAfterViewInit(): void {
    // Forzar la detección de cambios para asegurar que los templates se detecten
    setTimeout(() => {
      this.cdr.detectChanges();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['itemsPerPage']) {
      // Resetear a la primera página cuando cambian los datos
      if (changes['data']) {
        this.currentPage = 1;
      }
      this.applyFilters();
      this.updatePagination();
    }
  }

  updatePagination(): void {
    // LÓGICA CORREGIDA: Si hay filtros activos, solo usar filteredData
    let dataToUse: TableData[] = [];
    
    if (this.hasActiveFilters()) {
      // Si hay filtros activos, solo usar datos filtrados
      dataToUse = this.filteredData;
    } else {
      // Si no hay filtros activos, usar todos los datos
      dataToUse = this.data;
    }
    
    if (!dataToUse || dataToUse.length === 0) {
      this.paginatedData = [];
      this.paginationInfo = {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: this._itemsPerPage,
        startItem: 0,
        endItem: 0
      };
      this.currentPage = 1;
      return;
    }

    const totalItems = dataToUse.length;
    const totalPages = Math.ceil(totalItems / this._itemsPerPage);
    
    // Asegurar que currentPage esté dentro del rango válido
    if (this.currentPage > totalPages) {
      this.currentPage = totalPages;
    }
    if (this.currentPage < 1) {
      this.currentPage = 1;
    }
    
    const startItem = (this.currentPage - 1) * this._itemsPerPage;
    const endItem = Math.min(startItem + this._itemsPerPage, totalItems);

    this.paginationInfo = {
      currentPage: this.currentPage,
      totalPages,
      totalItems,
      itemsPerPage: this._itemsPerPage,
      startItem: startItem + 1,
      endItem
    };

    this.paginatedData = dataToUse.slice(startItem, endItem);
    
    // Forzar detección de cambios
    this.cdr.detectChanges();
  }

  onPageChange(page: number): void {
    // Validar que la página esté dentro del rango válido
    if (page >= 1 && page <= this.paginationInfo.totalPages && this.paginationInfo.totalPages > 0) {
      this.currentPage = page;
      this.animationKey = 0; // Reiniciar la animación
      this.updatePagination();
      this.pageChange.emit(page);
      
      // Activar la animación después de un breve delay
      setTimeout(() => {
        this.animationKey = Date.now();
        
        // Marcar como completa después de la duración de la animación
        setTimeout(() => {
          const tbody = document.querySelector('tbody[data-animation-key]') as HTMLElement;
          if (tbody) {
            tbody.classList.add('animation-complete');
          }
        }, 300); // Duración de la animación
      }, 10);
    }
  }

  onItemsPerPageChange(itemsPerPage: number): void {
    this._itemsPerPage = itemsPerPage;
    this.currentPage = 1; // Resetear a la primera página
    this.animationKey = 0; // Reiniciar la animación
    this.updatePagination();
    this.itemsPerPageChange.emit(itemsPerPage);
    
    // Activar la animación después de un breve delay
    setTimeout(() => {
      this.animationKey = Date.now();
      
      // Marcar como completa después de la duración de la animación
      setTimeout(() => {
        const tbody = document.querySelector('tbody[data-animation-key]') as HTMLElement;
        if (tbody) {
          tbody.classList.add('animation-complete');
        }
      }, 300); // Duración de la animación
    }, 10);
  }

  onSort(column: string): void {
    if (!this.columns.find(col => col.key === column)?.sortable) {
      return;
    }

    if (this.currentSort?.column === column) {
      this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSort = { column, direction: 'asc' };
    }

    this.sortChange.emit(this.currentSort);
  }

  getSortIcon(column: string): string {
    if (this.currentSort?.column !== column) {
      return 'bi-arrow-down-up';
    }
    return this.currentSort.direction === 'asc' ? 'bi-arrow-up' : 'bi-arrow-down';
  }

  trackByFn(index: number, item: any): any {
    return index;
  }

  // Método para obtener el template de una columna específica
  getColumnTemplate(columnKey: string): TemplateRef<any> | null {
    if (!this.columnDefs) {
      return null;
    }
    
    const columnDef = this.columnDefs.find(def => def.columnKey === columnKey);
    return columnDef ? columnDef.templateRef : null;
  }

  // Método para obtener el contexto del template
  getTemplateContext(row: TableData, column: TableColumn): any {
    return {
      $implicit: row,
      row: row,
      column: column,
      element: row,
      value: row[column.key],
      data: row[column.key]
    };
  }

  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.onItemsPerPageChange(+target.value);
    }
  }

  private setupResizeListener(): void {
    this.resizeListener = () => {
      // Actualizar paginación cuando cambie el tamaño de la ventana
      this.updatePagination();
    };
    window.addEventListener('resize', this.resizeListener);
  }

  // Método para manejar el click en una fila
  onRowClick(row: TableData): void {
    this.selectedRow = row;
    this.rowClick.emit(row);
  }

  // Método para manejar el doble click en una fila
  onRowDoubleClick(row: TableData): void {
    this.rowDoubleClick.emit(row);
  }

  // Método para verificar si una fila está seleccionada
  isRowSelected(row: TableData): boolean {
    return this.selectedRow === row;
  }

  // Métodos para manejar filtros - SIMPLIFICADO CON NORMALIZACIÓN DE TILDES
  applyFilters(): void {
    if (!this.data) {
      this.filteredData = [];
      return;
    }

    // Si no hay filtros activos, usar todos los datos
    const activeFilters = Object.keys(this.columnFilters).filter(key => 
      this.columnFilters[key] && this.columnFilters[key].trim() !== ''
    );

    if (activeFilters.length === 0) {
      this.filteredData = [...this.data];
    } else {
      // Aplicar filtros con normalización de tildes
      this.filteredData = this.data.filter(row => {
        return activeFilters.every(columnKey => {
          const filterValue = this.columnFilters[columnKey].trim();
          const cellValue = row[columnKey]?.toString() || '';
          
          // Filtrado con normalización: incluye el texto (insensible a mayúsculas/minúsculas y tildes)
          return this.normalizeText(cellValue).includes(this.normalizeText(filterValue));
        });
      });
    }
    
    // Resetear a la primera página cuando se aplican filtros
    this.currentPage = 1;
    
    // Forzar detección de cambios
    this.cdr.detectChanges();
  }

  // Método simple para normalizar texto (quitar tildes)
  private normalizeText(text: string): string {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, ''); // Quitar tildes y diacríticos
  }

  onFilterInputChange(event: Event, columnKey: string): void {
    const target = event.target as HTMLInputElement;
    const value = target?.value || '';
    this.onFilterChange(columnKey, value);
  }

  onFilterChange(columnKey: string, value: string): void {
    this.columnFilters[columnKey] = value;
    
    this.applyFilters(); // Esto ya resetea currentPage a 1
    this.updatePagination();
    
    // Emitir evento de filtro
    this.filterChange.emit({ ...this.columnFilters });
  }

  clearFilters(): void {
    this.columnFilters = {};
    this.applyFilters(); // Esto ya resetea currentPage a 1
    this.updatePagination();
    this.filterChange.emit({});
  }

  // Método para verificar si hay filtros activos
  hasActiveFilters(): boolean {
    return Object.keys(this.columnFilters).some(key => 
      this.columnFilters[key] && this.columnFilters[key].trim() !== ''
    );
  }

  // Método para obtener el número de resultados filtrados
  getFilteredResultsCount(): number {
    return this.filteredData.length;
  }

  ngOnDestroy(): void {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }
}
