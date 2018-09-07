import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DayjsModule } from '../modules/dayjs/dayjs.module';

const MODULES = [CommonModule, DayjsModule];

@NgModule({
  imports: [...MODULES],
  declarations: [],
  entryComponents: [],
  exports: [...MODULES]
})
export class SharedModule { }
