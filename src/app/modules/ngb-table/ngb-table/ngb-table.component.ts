import { Component, Input, OnInit } from '@angular/core';

export class Paginate {
  page: number;
  limit: number;
  totalCount: number;

  constructor(init?: Partial<Paginate>) {
    Object.assign(this, init);
  }

  get begin() {
    return (this.page - 1) * this.limit;
  }

  get end() {
    return (this.page * this.limit) < this.totalCount
            ? (this.page * this.limit)
            : this.totalCount;
  }

  get pages() {
    return Array(Math.ceil(this.totalCount / this.limit)).fill(0).map((_, i) => i + 1);
  }

  previous() {
    this.page = (1 < this.page) ? this.page - 1 : 1;
  }

  next() {
    this.page = (this.page < this.pages.length)
    ? this.page + 1
    : this.pages.length;
  }
}

@Component({
  selector: 'ngb-table',
  templateUrl: './ngb-table.component.html',
  styleUrls: ['./ngb-table.component.css']
})
export class NgbTableComponent implements OnInit {

  @Input()
  headers = [];

  @Input()
  items = [];

  // paging
  paginate: Paginate;

  constructor() { }

  ngOnInit() {
    this.paginate = new Paginate({
      page: 1,
      limit: 3,
      totalCount: this.items.length
    });
  }

  onSelectPreviousPage() {
    this.paginate.previous();
  }

  onSelectPage(page: number) {
    this.paginate.page = page;
  }

  onSelectNextPage() {
    this.paginate.next();
  }

}
