import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';

export class AddItem {
  static readonly type = '[Cart] Add Item';
  constructor(public newItem: Product) {}
}

export class RemoveItem {
  static readonly type = '[Cart] Remove Item';
  constructor(public itemId: number) {}
}

export class IncreaseQuantity {
  static readonly type = '[Cart] Increase Quantity';
  constructor(public itemId: number) {}
}

export class DecreaseQuantity {
  static readonly type = '[Cart] Decrease Quantity';
  constructor(public itemId: number) {}
}
