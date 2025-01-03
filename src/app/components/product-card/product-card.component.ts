import { Component, Input } from '@angular/core';
import { Product } from '../../types/Product';
import { map, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CartState } from '../../store/cart/cart.state';
import { CommonModule } from '@angular/common';
import {
  AddItem,
  DecreaseQuantity,
  IncreaseQuantity,
} from '../../store/cart/cart.actions';
import { QuantityUpdateComponent } from '../quantity-update/quantity-update.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, QuantityUpdateComponent, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;

  cartQuantity!: Observable<number>;

  constructor(private store: Store) {
    this.cartQuantity = this.store.select(CartState.getCartItem).pipe(
      map((getCartItem) => {
        const cartItem = getCartItem(this.product.id);

        return cartItem ? cartItem.quantity : 0;
      })
    );
  }

  addToCart() {
    this.store.dispatch(new AddItem(this.product));
  }

  increaseQuantity() {
    this.store.dispatch(new IncreaseQuantity(this.product.id));
  }

  decreaseQuantity() {
    this.store.dispatch(new DecreaseQuantity(this.product.id));
  }
}
