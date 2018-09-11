import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbTableComponent } from './ngb-table/ngb-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgbTableComponent],
  exports: [NgbTableComponent]
})
export class NgbTableModule { }
