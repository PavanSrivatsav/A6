import { Product } from './product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory-app';

  products: Product[];

  constructor() {
    this.products = [

      new Product('hat', 'A nice hat', 'assets/images/black-hat.jpg', ['Men', 'Hats'], 30),
      new Product('shoes', 'A nice shoe', 'assets/images/black-shoes.jpg', ['Men', 'Shoes'], 60),
      new Product('jaacket', 'A nice jaacket', 'assets/images/blue-jacket.jpg', ['Men', 'Apparel', 'Jackets and Vests'], 100)

    ];
  }
}
