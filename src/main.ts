import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent} from './app/app.component';

enableProdMode();

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
])
.catch(err => console.error(err));
