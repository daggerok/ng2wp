import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2wp-home',
  template: `<p>Home page</p>`,
  styles: [`
    /* // cscc component styles are encapsulated and only applied to their components */
    * {
      color: #FFEF00;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() {}

  public ngOnInit() {
    console.log('ng2wp');
  }
}
