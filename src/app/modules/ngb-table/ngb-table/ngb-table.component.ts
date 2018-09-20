import { Component, Input, OnInit } from '@angular/core';
import { firstBy } from 'thenby';

export class Header {
  static readonly SEQ = '__SEQ';
  field: string;
  label: string;
}

export class Order {
  field: string;
  opt: opt;
  constructor(init?: Partial<Order>) {
    Object.assign(this, init);
  }
}

export class Paginate {

  page = 1;
  itemsPerPage = 3;
  totalItems = 0;

  constructor(init?: Partial<Paginate>) {
    Object.assign(this, init);
  }

  get begin() {
    return (this.page - 1) * this.itemsPerPage;
  }

  get end() {
    return (this.page * this.itemsPerPage) < this.totalItems
            ? (this.page * this.itemsPerPage)
            : this.totalItems;
  }

  get pages() {
    return Array(Math.ceil(this.totalItems / this.itemsPerPage)).fill(0).map((_, i) => i + 1);
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

  readonly SEQ = Header.SEQ;

  @Input()
  title: string;

  @Input()
  subtitle: string;

  @Input()
  headers: Header[];

  @Input()
  data = [];

  // order
  order: Order;

  // paging
  paginate: Paginate;

  totalCount = 10;
  currentPage = 1;

  constructor() { }

  ngOnInit() {
    this.paginate = new Paginate({totalItems: this.data.length});
  }

  orderBy(field: string) {
    // go to first page
    this.paginate.page = 1;
    // setup order option
    this.order = {
      field,
      opt: {
        direction: (this.order && this.order.field === field)
          ? this.order.opt.direction * -1
          : 1
      }
    };
    // sort data
    this.data.sort(firstBy(this.order.field, this.order.opt));
  }
}
