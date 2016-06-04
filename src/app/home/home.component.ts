import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2wp-home',
  template: `
<p>
  Home Works!
</p>
`,
  styles: [`
/* // cscc component styles are encapsulated and only applied to their components */
* {
  color: #FFEF00;
}
`]
})
export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
