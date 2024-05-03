import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiCartUrl = environment.apiUrl + '/cart';
  private apiCheckouttUrl = environment.apiUrl + '/checkout';

  constructor(private http: HttpClient) {}

  addToCart(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiCartUrl, product);
  }

  getCart(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiCartUrl);
  }

  clearCart(): Observable<void> {
    return this.http.delete<void>(this.apiCartUrl);
  }

  checkout(cart: Product[]): Observable<void> {
    return this.http.post<void>(this.apiCheckouttUrl, cart);
  }
}
