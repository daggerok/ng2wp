import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent} from './app/app.component';

enableProdMode();

bootstrap(AppComponent, [
  // dependencies
  ...HTTP_PROVIDERS,
  ...ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy } // use #/ routes, remove this for HTML5 mode
])
.catch(err => console.error(err));
