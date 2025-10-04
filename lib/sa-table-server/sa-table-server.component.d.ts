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
    class: string;
    columnDefs?: QueryList<SaColumnDefDirective>;
    defaultCellTemplate?: TemplateRef<any>;
    private _loading;
    private _showFirstLastButtons;
    set loading(value: boolean | any);
    get loading(): boolean;
    set showFirstLastButtons(value: boolean | any);
    get showFirstLastButtons(): boolean;
    paginationData: ServerPaginationData;
    paginationOptions: ServerPaginationOptions;
    autoLoad: boolean;
    minWidth: string;
    minTableHeight: number;
    loadData: EventEmitter<ServerTableRequest>;
    pageChange: EventEmitter<number>;
    itemsPerPageChange: EventEmitter<number>;
    sortChange: EventEmitter<{
        column: string;
        direction: "asc" | "desc";
    }>;
    rowClick: EventEmitter<TableData>;
    rowDoubleClick: EventEmitter<TableData>;
    get hostClasses(): string;
    selectedRow: TableData | null;
    sortColumn: string;
    sortDirection: 'asc' | 'desc';
    private _hasInitialLoad;
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
     * Verifica si debe usar layout fijo o automático
     */
    get shouldUseFixedLayout(): boolean;
    /**
     * Obtiene el contexto para templates
     */
    getTemplateContext(row: TableData, column: TableColumn): any;
    /**
     * Función trackBy usando index
     */
    trackByIndex(index: number): number;
    /**
     * Obtiene el elemento inicial de la página actual
     */
    getStartItem(): number;
    /**
     * Obtiene el elemento final de la página actual
     */
    getEndItem(): number;
    /**
     * ✅ Calcula la altura mínima del tbody
     */
    getTableBodyMinHeight(): number;
    /**
     * Getter para usar en template
     */
    get hasInitialLoad(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaTableServerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaTableServerComponent, "sa-table-server", never, { "columns": { "alias": "columns"; "required": false; }; "data": { "alias": "data"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "class": { "alias": "class"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "showFirstLastButtons": { "alias": "showFirstLastButtons"; "required": false; }; "paginationData": { "alias": "paginationData"; "required": false; }; "paginationOptions": { "alias": "paginationOptions"; "required": false; }; "autoLoad": { "alias": "autoLoad"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; "minTableHeight": { "alias": "minTableHeight"; "required": false; }; }, { "loadData": "loadData"; "pageChange": "pageChange"; "itemsPerPageChange": "itemsPerPageChange"; "sortChange": "sortChange"; "rowClick": "rowClick"; "rowDoubleClick": "rowDoubleClick"; }, ["columnDefs"], never, false, never>;
}
