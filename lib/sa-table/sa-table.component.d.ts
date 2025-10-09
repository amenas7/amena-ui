import { EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy, TemplateRef, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SaColumnDefDirective } from './sa-column-def.directive';
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
export interface PaginationInfo {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    startItem: number;
    endItem: number;
}
export declare class SaTableComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private cdr;
    private resizeListener;
    constructor(cdr: ChangeDetectorRef);
    columns: TableColumn[];
    data: TableData[];
    emptyMessage: string;
    class: string;
    columnDefs?: QueryList<SaColumnDefDirective>;
    defaultCellTemplate?: TemplateRef<any>;
    private _itemsPerPage;
    private _showPagination;
    private _showItemsPerPage;
    private _showTotal;
    private _loading;
    private _showFirstLastButtons;
    private _showFilters;
    set itemsPerPage(value: number | any);
    get itemsPerPage(): number;
    set showPagination(value: boolean | any);
    get showPagination(): boolean;
    set showItemsPerPage(value: boolean | any);
    get showItemsPerPage(): boolean;
    set showTotal(value: boolean | any);
    get showTotal(): boolean;
    set loading(value: boolean | any);
    get loading(): boolean;
    set showFirstLastButtons(value: boolean | any);
    get showFirstLastButtons(): boolean;
    set showFilters(value: boolean | any);
    get showFilters(): boolean;
    private _minWidth;
    set minWidth(value: string | any);
    get minWidth(): string;
    rowClassFn?: (row: TableData) => string | string[] | {
        [key: string]: boolean;
    };
    rowStyleFn?: (row: TableData) => {
        [key: string]: string;
    };
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
    get hostClasses(): string;
    currentPage: number;
    currentSort: {
        column: string;
        direction: 'asc' | 'desc';
    } | null;
    paginationInfo: PaginationInfo;
    paginatedData: TableData[];
    itemsPerPageOptions: number[];
    animationKey: number;
    Array: ArrayConstructor;
    Object: ObjectConstructor;
    get shouldUseFixedLayout(): boolean;
    selectedRow: TableData | null;
    columnFilters: {
        [key: string]: string;
    };
    filteredData: TableData[];
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updatePagination(): void;
    onPageChange(page: number): void;
    onItemsPerPageChange(itemsPerPage: number): void;
    onSort(column: string): void;
    getSortIcon(column: string): string;
    trackByFn(index: number, item: any): any;
    getColumnTemplate(columnKey: string): TemplateRef<any> | null;
    getTemplateContext(row: TableData, column: TableColumn): any;
    onSelectChange(event: Event): void;
    private setupResizeListener;
    onRowClick(row: TableData): void;
    onRowDoubleClick(row: TableData): void;
    isRowSelected(row: TableData): boolean;
    getRowClasses(row: TableData): any;
    getRowStyles(row: TableData): {
        [key: string]: string;
    };
    getCellStyles(row: TableData): {
        [key: string]: string;
    };
    applyFilters(): void;
    private normalizeText;
    onFilterInputChange(event: Event, columnKey: string): void;
    onFilterChange(columnKey: string, value: string): void;
    clearFilters(): void;
    hasActiveFilters(): boolean;
    getFilteredResultsCount(): number;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaTableComponent, "sa-table", never, { "columns": { "alias": "columns"; "required": false; }; "data": { "alias": "data"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "class": { "alias": "class"; "required": false; }; "itemsPerPage": { "alias": "itemsPerPage"; "required": false; }; "showPagination": { "alias": "showPagination"; "required": false; }; "showItemsPerPage": { "alias": "showItemsPerPage"; "required": false; }; "showTotal": { "alias": "showTotal"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "showFirstLastButtons": { "alias": "showFirstLastButtons"; "required": false; }; "showFilters": { "alias": "showFilters"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; "rowClassFn": { "alias": "rowClassFn"; "required": false; }; "rowStyleFn": { "alias": "rowStyleFn"; "required": false; }; }, { "pageChange": "pageChange"; "itemsPerPageChange": "itemsPerPageChange"; "sortChange": "sortChange"; "rowClick": "rowClick"; "rowDoubleClick": "rowDoubleClick"; "filterChange": "filterChange"; }, ["columnDefs"], never, false, never>;
}
