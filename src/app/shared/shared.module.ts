import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DayjsModule } from '../modules/dayjs/dayjs.module';
import { NgbTableModule } from '../modules/ngb-table/ngb-table.module';
import { InfoModalComponent } from './components';


const MODULES = [CommonModule, DayjsModule, TranslateModule, ModalModule, NgbTableModule];
const ENTRY_COMPONENTS = [InfoModalComponent];
const COMPONENTS = [];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS, ...ENTRY_COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS],
  exports: [...MODULES, ...COMPONENTS]
})
export class SharedModule { }
