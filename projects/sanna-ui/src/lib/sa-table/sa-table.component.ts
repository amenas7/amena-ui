import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

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
  styleUrl: './sa-table.component.scss'
})
export class SaTableComponent implements OnInit, OnChanges {
  @Input() columns: TableColumn[] = [];
  @Input() data: TableData[] = [];
  @Input() itemsPerPage: number = 10;
  @Input() showPagination: boolean = true;
  @Input() showItemsPerPage: boolean = true;
  @Input() showTotal: boolean = true;
  @Input() hover: boolean = false;
  @Input() responsive: boolean = true;
  @Input() loading: boolean = false;
  @Input() emptyMessage: string = 'No hay datos disponibles';

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







  ngOnInit(): void {
    this.updatePagination();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['itemsPerPage'] || changes['currentPage']) {
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
      this.updatePagination();
      this.pageChange.emit(page);
    }
  }

  onItemsPerPageChange(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.updatePagination();
    this.itemsPerPageChange.emit(itemsPerPage);
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

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
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

  onSelectChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    if (target) {
      this.onItemsPerPageChange(+target.value);
    }
  }
}
