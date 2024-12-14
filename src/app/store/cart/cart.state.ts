import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CartItem } from '../../types/CartItem';
import {
  AddItem,
  DecreaseQuantity,
  IncreaseQuantity,
  RemoveItem,
} from './cart.actions';

interface CartStateModel {
  cartItems: CartItem[];
}

const defaults: CartStateModel = {
  cartItems: [],
};

@State({
  name: 'cart',
  defaults,
})
@Injectable()
export class CartState {
  @Selector()
  static getCart({ cartItems }: CartStateModel): CartItem[] {
    return cartItems;
  }

  @Selector()
  static getCartItem({ cartItems }: CartStateModel) {
    return (itemId: number) => cartItems.find((i) => i.id === itemId) || null;
  }

  @Selector()
  static cartQuantity({ cartItems }: CartStateModel): number {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }

  @Action(AddItem)
  addItem(ctx: StateContext<CartStateModel>, { newItem }: AddItem) {
    const { cartItems } = ctx.getState();

    const cartItem = { ...newItem, quantity: 1 };

    ctx.patchState({ cartItems: [...cartItems, cartItem] });
  }

  @Action(RemoveItem)
  removeItem(ctx: StateContext<CartStateModel>, { itemId }: RemoveItem) {
    const { cartItems } = ctx.getState();
    ctx.patchState({ cartItems: cartItems.filter((i) => i.id !== itemId) });
  }

  @Action(IncreaseQuantity)
  increaseQuantity(
    ctx: StateContext<CartStateModel>,
    { itemId }: IncreaseQuantity
  ) {
    const { cartItems } = ctx.getState();
    ctx.patchState({
      cartItems: cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  }

  @Action(DecreaseQuantity)
  decreaseQuantity(
    ctx: StateContext<CartStateModel>,
    { itemId }: DecreaseQuantity
  ) {
    const { cartItems } = ctx.getState();

    const cartItem = cartItems.find((i) => i.id === itemId);

    cartItem?.quantity === 1
      ? ctx.dispatch(new RemoveItem(itemId))
      : ctx.patchState({
          cartItems: cartItems.map((item) =>
            item.id !== itemId ? item : { ...item, quantity: item.quantity - 1 }
          ),
        });
  }
}
