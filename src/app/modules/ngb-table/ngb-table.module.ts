import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { NgbTableComponent } from './ngb-table/ngb-table.component';


@NgModule({
  imports: [CommonModule, FormsModule, PaginationModule.forRoot()],
  declarations: [NgbTableComponent],
  exports: [NgbTableComponent]
})
export class NgbTableModule { }
