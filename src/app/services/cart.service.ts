import { Injectable } from '@angular/core';
import { Product } from '../products';
import { HttpClient } from '@angular/common/http';
import { ShippingPrice } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: Product[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  clearCart(): Product[] {
    this.cartItems = [];
    return this.cartItems;
  }

  getShippingPrices() {
    return this.http.get<ShippingPrice[]>('/assets/shipping.json');
  }
}
