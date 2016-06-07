import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES, OnActivate, RouteSegment, RouteTree} from '@angular/router';

import { ApiService } from './shared';
import { HomeComponent } from './home';
import { AboutComponent } from './about';

import '../style/app.scss';

@Component({
  // <ng2wp-app></ng2wp-app>
  selector: 'ng2wp-app',
  providers: [ApiService],
  directives: [ROUTER_DIRECTIVES],

  // use require! relative paths with bundling app may not work...
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],

  /* // move large parts into separate files
  template: ``, styles: [``] */
})
@Routes([
  {path: '/', component: HomeComponent}, // add :some to fix rout issue
  {path: '/About', component: AboutComponent}
])
export class AppComponent implements OnActivate {

  url = 'https://github.com/daggerok/ng2wp';

  public routerOnActivate(curr: RouteSegment,
                          prev?: RouteSegment,
                          currTree?: RouteTree,
                          prevTree?: RouteTree): void {}

  constructor(private api: ApiService) {}
}
