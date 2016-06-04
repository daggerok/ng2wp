import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ApiService } from './shared';
import { HomeComponent } from './home';
import { AboutComponent } from './about';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'ng2wp-app', // <app></app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES],
  // template: require('./disabled.app.component.html'),
  template: `
<header>
  <nav>
    <a [routerLink]="['Home']">Home</a>
    <a [routerLink]="['About']">About</a>
  </nav>
</header>
<main>
  <h1 class="title">Hello from {{api.title}}!</h1>

  <!-- Images (and assets) are parsed and loaded from within the public directory -->
  <img src="/img/angular.png">

  <router-outlet></router-outlet>
</main>
<footer>
  <a [href]="url">Webpack Angular 2 Starter</a>
</footer>
  `,
  // styles: [require('./disabled.app.component.scss')],
  styles: [`
/* // cscc styles applied on :host are applied on the current component, "ng2wp" in this case */
:host {
  display: block;
}

header {
  background-color: #fff;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}

main {
  padding: 1em;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 50px;
  display: block;
}

footer {
  text-align: center;
  font-size: 0.8em;
}
  `]
})
@RouteConfig([
  {path: '/', component: HomeComponent, name: 'Home'},
  {path: '/About', component: AboutComponent, name: 'About'}
])
export class AppComponent {
  url = 'https://github.com/daggerok/ng2wp';

  constructor(private api: ApiService) {
  }
}
