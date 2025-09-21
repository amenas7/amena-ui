import { EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy, TemplateRef, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SaColumnDefDirective } from '../sa-table/sa-column-def.directive';
import * as i0 from "@angular/core";
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
    filters?: {
        [key: string]: any;
    };
}
export interface ServerTableResponse<T = TableData> {
    data: T[];
    totalItems: number;
    currentPage: number;
    itemsPerPage: number;
}
export declare class SaTableServerComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private cdr;
    private resizeListener;
    constructor(cdr: ChangeDetectorRef);
    columns: TableColumn[];
    data: TableData[];
    emptyMessage: string;
    columnDefs?: QueryList<SaColumnDefDirective>;
    defaultCellTemplate?: TemplateRef<any>;
    private _hover;
    private _loading;
    private _showFirstLastButtons;
    private _showFilters;
    set hover(value: boolean | any);
    get hover(): boolean;
    set loading(value: boolean | any);
    get loading(): boolean;
    set showFirstLastButtons(value: boolean | any);
    get showFirstLastButtons(): boolean;
    set showFilters(value: boolean | any);
    get showFilters(): boolean;
    paginationData: ServerPaginationData;
    paginationOptions: ServerPaginationOptions;
    autoLoad: boolean;
    minWidth: string;
    loadData: EventEmitter<ServerTableRequest>;
    pageChange: EventEmitter<number>;
    itemsPerPageChange: EventEmitter<number>;
    sortChange: EventEmitter<{
        column: string;
        direction: "asc" | "desc";
    }>;
    rowClick: EventEmitter<TableData>;
    rowDoubleClick: EventEmitter<TableData>;
    filterChange: EventEmitter<{
        [column: string]: string;
    }>;
    selectedRow: TableData | null;
    sortColumn: string;
    sortDirection: 'asc' | 'desc';
    columnFilters: {
        [key: string]: string;
    };
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    /**
     * Solicita datos al servidor
     */
    requestData(): void;
    /**
     * Cambio de página
     */
    onPageChange(page: number): void;
    /**
     * Página anterior
     */
    onPreviousPage(): void;
    /**
     * Página siguiente
     */
    onNextPage(): void;
    /**
     * Cambio de elementos por página
     */
    onItemsPerPageChange(newItemsPerPage: number): void;
    /**
     * Cambio de ordenamiento
     */
    onSort(column: string): void;
    /**
     * Cambio de filtro
     */
    onFilterChange(column: string, value: string): void;
    /**
     * Click en fila
     */
    onRowClick(row: TableData): void;
    /**
     * Doble click en fila
     */
    onRowDoubleClick(row: TableData): void;
    /**
     * Obtiene el template para una columna específica
     */
    getColumnTemplate(columnKey: string): TemplateRef<any> | null;
    /**
     * Verifica si una columna es ordenable
     */
    isColumnSortable(columnKey: string): boolean;
    /**
     * Verifica si una columna debe mostrar filtro
     */
    shouldShowFilter(columnKey: string): boolean;
    /**
     * Obtiene el total de páginas
     */
    getTotalPages(): number;
    /**
     * Obtiene el icono de ordenamiento
     */
    getSortIcon(columnKey: string): string;
    /**
     * Obtiene las clases CSS para la fila
     */
    getRowClasses(row: TableData): string;
    /**
     * Recargar datos
     */
    reload(): void;
    /**
     * Limpiar filtros
     */
    clearFilters(): void;
    /**
     * Verifica si debe usar layout fijo o automático
     */
    get shouldUseFixedLayout(): boolean;
    /**
     * Obtiene el contexto para templates
     */
    getTemplateContext(row: TableData, column: TableColumn): any;
    /**
     * Función trackBy para optimizar renderizado
     */
    trackByFn(index: number, item: TableData): any;
    /**
     * Obtiene el elemento inicial de la página actual
     */
    getStartItem(): number;
    /**
     * Obtiene el elemento final de la página actual
     */
    getEndItem(): number;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaTableServerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaTableServerComponent, "sa-table-server", never, { "columns": { "alias": "columns"; "required": false; }; "data": { "alias": "data"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "hover": { "alias": "hover"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "showFirstLastButtons": { "alias": "showFirstLastButtons"; "required": false; }; "showFilters": { "alias": "showFilters"; "required": false; }; "paginationData": { "alias": "paginationData"; "required": false; }; "paginationOptions": { "alias": "paginationOptions"; "required": false; }; "autoLoad": { "alias": "autoLoad"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; }, { "loadData": "loadData"; "pageChange": "pageChange"; "itemsPerPageChange": "itemsPerPageChange"; "sortChange": "sortChange"; "rowClick": "rowClick"; "rowDoubleClick": "rowDoubleClick"; "filterChange": "filterChange"; }, ["columnDefs"], never, false, never>;
}
