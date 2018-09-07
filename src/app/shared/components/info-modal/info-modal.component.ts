import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'ngb-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {

  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() { }

}
