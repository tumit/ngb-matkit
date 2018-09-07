import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DayjsModule } from '../modules/dayjs/dayjs.module';

const MODULES = [CommonModule, DayjsModule, TranslateModule];

@NgModule({
  imports: [...MODULES],
  declarations: [],
  entryComponents: [],
  exports: [...MODULES]
})
export class SharedModule { }
