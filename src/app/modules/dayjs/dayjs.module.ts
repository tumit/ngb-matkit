import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DayjsPipe } from './pips/dayjs.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DayjsPipe],
  exports: [DayjsPipe]
})
export class DayjsModule { }
