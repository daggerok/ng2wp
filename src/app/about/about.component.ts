import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2wp-about',
  template: require('./about.component.html'),
  styles: [require('./about.component.scss')]
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('Hello About');
  }
}
