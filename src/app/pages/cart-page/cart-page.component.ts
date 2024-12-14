import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { CartState } from '../../store/cart/cart.state';
import { CommonModule } from '@angular/common';
import { QuantityUpdateComponent } from '../../components/quantity-update/quantity-update.component';
import { CartItem } from '../../types/CartItem';
import {
  DecreaseQuantity,
  IncreaseQuantity,
  RemoveItem,
} from '../../store/cart/cart.actions';
import { map } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [CommonModule, QuantityUpdateComponent, RouterLink],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  store = inject(Store);
  cartItems$ = this.store.select(CartState.getCart);

  totalCartItemsPrice$ = this.cartItems$.pipe(
    map((cartItems) =>
      cartItems.reduce((total, i) => total + i.price * i.quantity, 0)
    )
  );

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
