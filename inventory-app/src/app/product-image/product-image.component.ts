import { Product } from './../product.model';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'product-image',
  template: `  
  <img class="product-image" [src]="product.imageUrl" />
  `,
  //  it can also be written as src="{{ product.imageUrl }}"> 
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }

  ngOnInit() {
  }

}
