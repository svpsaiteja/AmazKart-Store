import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { CartState } from '../store/cart/cart.state';
import { CommonModule } from '@angular/common';
import { QuantityUpdateComponent } from '../quantity-update/quantity-update.component';
import { CartItem } from '../types/CartItem';
import {
  DecreaseQuantity,
  IncreaseQuantity,
  RemoveItem,
} from '../store/cart/cart.actions';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, QuantityUpdateComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  store = inject(Store);
  cartItems$ = this.store.select(CartState.getCart);

  increaseQuantity(item: CartItem) {
    this.store.dispatch(new IncreaseQuantity(item.id));
  }

  decreaseQuantity(item: CartItem) {
    this.store.dispatch(new DecreaseQuantity(item.id));
  }

  deleteFromCart(item: CartItem) {
    this.store.dispatch(new RemoveItem(item.id));
  }
}
