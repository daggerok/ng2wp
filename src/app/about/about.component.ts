import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng2wp-about',
  template: `<p>About page</p>`,
  styles: [`
    * {
      color: #f87c08;
    }
  `]
})
export class AboutComponent implements OnInit {

  constructor() {}

  public ngOnInit() {}
}
