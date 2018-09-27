import { Product } from './../product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  private userSelectedProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(p: Product): void {
    this.userSelectedProduct = p; // used internally in this controller.
    this.onProductSelected.emit(p); // is used in app.componenet.ts to console.log
  }

  isSelected(product: Product): boolean {
    if (product != null && this.userSelectedProduct != null && product.shortName === this.userSelectedProduct.shortName)
      return true;
    else
      return false;
  }

  ngOnInit() {
  }

}
