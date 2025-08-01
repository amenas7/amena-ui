import { EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
export declare class SaTableComponent implements OnInit, OnChanges {
    columns: TableColumn[];
    data: TableData[];
    emptyMessage: string;
    private _itemsPerPage;
    private _showPagination;
    private _showItemsPerPage;
    private _showTotal;
    private _hover;
    private _responsive;
    private _loading;
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
    set responsive(value: boolean | any);
    get responsive(): boolean;
    set loading(value: boolean | any);
    get loading(): boolean;
    pageChange: EventEmitter<number>;
    itemsPerPageChange: EventEmitter<number>;
    sortChange: EventEmitter<{
        column: string;
        direction: "asc" | "desc";
    }>;
    currentPage: number;
    currentSort: {
        column: string;
        direction: 'asc' | 'desc';
    } | null;
    paginationInfo: PaginationInfo;
    paginatedData: TableData[];
    itemsPerPageOptions: number[];
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updatePagination(): void;
    onPageChange(page: number): void;
    onItemsPerPageChange(itemsPerPage: number): void;
    onSort(column: string): void;
    getSortIcon(column: string): string;
    getPageNumbers(): number[];
    trackByFn(index: number, item: any): any;
    onSelectChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaTableComponent, "sa-table", never, { "columns": { "alias": "columns"; "required": false; }; "data": { "alias": "data"; "required": false; }; "emptyMessage": { "alias": "emptyMessage"; "required": false; }; "itemsPerPage": { "alias": "itemsPerPage"; "required": false; }; "showPagination": { "alias": "showPagination"; "required": false; }; "showItemsPerPage": { "alias": "showItemsPerPage"; "required": false; }; "showTotal": { "alias": "showTotal"; "required": false; }; "hover": { "alias": "hover"; "required": false; }; "responsive": { "alias": "responsive"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; }, { "pageChange": "pageChange"; "itemsPerPageChange": "itemsPerPageChange"; "sortChange": "sortChange"; }, never, never, false, never>;
}
