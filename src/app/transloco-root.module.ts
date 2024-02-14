import {
  provideTransloco,
  TranslocoModule
} from '@ngneat/transloco';
import { NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';
import { environment } from '../../src/environments/environment.prod';
import { provideTranslocoPersistLang } from '@ngneat/transloco-persist-lang';
@NgModule({
  exports: [ TranslocoModule ],
  providers: [
      provideTransloco({
        config: {
          availableLangs: ['en', 'es'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: environment.production,
        },
        loader: TranslocoHttpLoader
      }),
      provideTranslocoPersistLang({
        storage: {
          useValue: localStorage,
        },
      }),
  ],
  
  
})
export class TranslocoRootModule {}
