import { Product } from './product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';

  product:Product;

  constructor(){
    this.product=new Product('hat','A nice hat','',['Men','Hats'],30);
  }
}
