import { Component, Input, OnInit } from '@angular/core';
import { firstBy } from 'thenby';

export interface Header {
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

  constructor() { }

  ngOnInit() {
    this.paginate = new Paginate({
      page: 1,
      limit: 3,
      totalCount: this.data.length
    });
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
