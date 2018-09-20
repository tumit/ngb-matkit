import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ]
})
export class CoreNgxBootstrapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreNgxBootstrapModule
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreNgxBootstrapModule
  ) {
    if (parentModule) {
      throw new Error('CoreNgxBootstrapModule is already loaded.');
    }
  }
}
