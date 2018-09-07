import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DayjsModule } from '../modules/dayjs/dayjs.module';
import { InfoModalComponent } from './components/info-modal/info-modal.component';

const MODULES = [CommonModule, DayjsModule, TranslateModule, ModalModule];
const ENTRY_COMPONENTS = [InfoModalComponent];

@NgModule({
  imports: [...MODULES],
  declarations: [...ENTRY_COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS],
  exports: [...MODULES]
})
export class SharedModule { }
