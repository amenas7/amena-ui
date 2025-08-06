import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy, ContentChild, TemplateRef, QueryList, ViewChildren, ViewChild, ContentChildren, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SaColumnDefDirective } from './sa-column-def.directive';

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
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
  styleUrls: ['./sa-table.component.scss']
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
  private _itemsPerPage: number = 10;
  private _showPagination: boolean = true;
  private _showItemsPerPage: boolean = true;
  private _showTotal: boolean = true;
  private _hover: boolean = false;
  private _loading: boolean = false;
  private _showFirstLastButtons: boolean = true;

  @Input()
  set itemsPerPage(value: number | any) {
    this._itemsPerPage = value != null ? +value : 10;
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

  currentPage: number = 1;
  currentSort: {column: string, direction: 'asc' | 'desc'} | null = null;
  paginationInfo: PaginationInfo = {
    currentPage: 1,
    totalPages: 0,
    totalItems: 0,
    itemsPerPage: 10,
    startItem: 0,
    endItem: 0
  };

  paginatedData: TableData[] = [];
  itemsPerPageOptions: number[] = [5, 10, 25, 50, 100];
  
  // Propiedad para controlar la animación
  animationKey: number = 0;

  // Propiedad para acceder a Array desde el template
  Array = Array;







  ngOnInit(): void {
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
      this.updatePagination();
    }
  }

  updatePagination(): void {
    if (!this.data) {
      this.paginatedData = [];
      this.paginationInfo = {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: this.itemsPerPage,
        startItem: 0,
        endItem: 0
      };
      return;
    }

    const totalItems = this.data.length;
    const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    const startItem = (this.currentPage - 1) * this.itemsPerPage;
    const endItem = Math.min(startItem + this.itemsPerPage, totalItems);

    this.paginationInfo = {
      currentPage: this.currentPage,
      totalPages,
      totalItems,
      itemsPerPage: this.itemsPerPage,
      startItem: startItem + 1,
      endItem
    };

    this.paginatedData = this.data.slice(startItem, endItem);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.paginationInfo.totalPages) {
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
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
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

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const totalPages = this.paginationInfo.totalPages;
    const currentPage = this.currentPage;
    
    // Detectar si estamos en un dispositivo pequeño (menos de 768px)
    const isSmallScreen = window.innerWidth < 768;

    if (totalPages <= 7) {
      // Para pocas páginas, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (isSmallScreen) {
      // En dispositivos pequeños, mostrar solo 2 páginas máximo
      if (currentPage <= 2) {
        // Al inicio: mostrar páginas 1, 2 + separador + última
        for (let i = 1; i <= Math.min(2, totalPages); i++) {
          pages.push(i);
        }
        if (totalPages > 2) {
          pages.push(-1); // Separator
          pages.push(totalPages);
        }
      } else if (currentPage >= totalPages - 1) {
        // Al final: mostrar primera + separador + últimas 2 páginas
        pages.push(1);
        pages.push(-1); // Separator
        for (let i = Math.max(totalPages - 1, 1); i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // En medio: mostrar primera + separador + actual + separador + última
        pages.push(1);
        pages.push(-1); // Separator
        pages.push(currentPage);
        pages.push(-1); // Separator
        pages.push(totalPages);
      }
    } else {
      // En pantallas grandes, comportamiento original
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(-1); // Separator
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push(-1); // Separator
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1); // Separator
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1); // Separator
        pages.push(totalPages);
      }
    }

    return pages;
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

  ngOnDestroy(): void {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }
}
