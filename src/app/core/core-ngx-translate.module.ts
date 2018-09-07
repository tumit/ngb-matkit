import { HttpClient } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ]
})
export class CoreNgxTranslateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreNgxTranslateModule
    };
  }

  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreNgxTranslateModule
  ) {
    if (parentModule) {
      throw new Error('CoreNgxTranslateModule is already loaded.');
    }
  }
}
