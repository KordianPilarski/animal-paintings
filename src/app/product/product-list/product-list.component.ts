import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    console.log(this.products);
    setTimeout(() => {
      console.log(this.products);
    }, 1000);
  }

  getProducts(): void {
    console.log('called');
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }
}
