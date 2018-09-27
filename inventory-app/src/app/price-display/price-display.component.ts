import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  template: `
  
  <div class="price-display">\${{ price }}</div>   
  `,

  // \$ -> because we have to display $ in view so we are escaping "$" from the back-tick exe
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {

  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
