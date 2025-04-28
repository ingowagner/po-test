import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ICONS_DICTIONARY, AnimaliaIconDictionary } from '@po-ui/ng-components';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    {
      provide: ICONS_DICTIONARY,
      useValue: AnimaliaIconDictionary,
    }
  ]
};
