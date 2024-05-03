import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log(this.cartItems);
    this.cartService.getCart().subscribe((data) => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    });

    setTimeout(() => {
      console.log(this.cartItems);
    }, 1000);
  }

  ngAfterViewInit() {}

  getTotalPrice(): number {
    let total = 0;
    for (let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe();
  }

  checkout(): void {
    this.cartService.checkout(this.cartItems).subscribe();
  }
}