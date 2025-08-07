import { EventEmitter, OnInit, OnChanges, SimpleChanges, OnDestroy, TemplateRef, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SaColumnDefDirective } from './sa-column-def.directive';
import * as i0 from "@angular/core";
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
export declare class SaTableComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
    private cdr;
    private resizeListener;
    constructor(cdr: ChangeDetectorRef);
    columns: TableColumn[];
    data: TableData[];
    emptyMessage: string;
    columnDefs?: QueryList<SaColumnDefDirective>;
    defaultCellTemplate?: TemplateRef<any>;
    private _itemsPerPage;
    private _showPagination;
    private _showItemsPerPage;
    private _showTotal;
    private _hover;
    private _loading;
    private _showFirstLastButtons;
    set itemsPerPage(value: number | any);
    get itemsPerPage(): number;
    set showPagination(value: boolean | any);
    get showPagination(): boolean;
    set showItemsPerPage(value: boolean | any);
    get showItemsPerPage(): boolean;
    set showTotal(value: boolean | any);
    get showTotal(): boolean;
    set hover(value: boolean | any);
    get hover(): boolean;
    set loading(value: boolean | any);
    get loading(): boolean;
    set showFirstLastButtons(value: boolean | any);
    get showFirstLastButtons(): boolean;
    private _minWidth;
    set minWidth(value: string | any);
    get minWidth(): string;
    pageChange: EventEmitter<number>;
    itemsPerPageChange: EventEmitter<number>;
    sortChange: EventEmitter<{
        column: string;
        direction: "asc" | "desc";
    }>;
    rowClick: EventEmitter<TableData>;
    rowDoubleClick: EventEmitter<TableData>;
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
    selectedRow: TableData | null;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updatePagination(): void;
    onPageChange(page: number): void;
    onItemsPerPageChange(itemsPerPage: number): void;
    onSort(column: string): void;
    getSortIcon(column: string): string;
    getPageNumbers(): number[];
    trackByFn(index: number, item: any): any;
    getColumnTemplate(columnKey: string): TemplateRef<any> | null;
    getTemplateContext(row: TableData, column: TableColumn): any;
    onSelectChange(event: Event): void;
    private setupResizeListener;
    onRowClick(row: TableData): void;
    onRowDoubleClick(row: TableData): void;
    isRowSelected(row: TableData): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaTableComponent, "sa-table", never, { "columns": { "alias": "columns"; "required": false; }; "data": { "alias": "data"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "itemsPerPage": { "alias": "itemsPerPage"; "required": false; }; "showPagination": { "alias": "showPagination"; "required": false; }; "showItemsPerPage": { "alias": "showItemsPerPage"; "required": false; }; "showTotal": { "alias": "showTotal"; "required": false; }; "hover": { "alias": "hover"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "showFirstLastButtons": { "alias": "showFirstLastButtons"; "required": false; }; "minWidth": { "alias": "minWidth"; "required": false; }; }, { "pageChange": "pageChange"; "itemsPerPageChange": "itemsPerPageChange"; "sortChange": "sortChange"; "rowClick": "rowClick"; "rowDoubleClick": "rowDoubleClick"; }, ["columnDefs"], never, false, never>;
}
