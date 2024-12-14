import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { map, Observable, tap } from 'rxjs';
import { Product } from '../types/Product';
import { CommonModule } from '@angular/common';
import { QuantityUpdateComponent } from '../quantity-update/quantity-update.component';
import { CartItem } from '../types/CartItem';
import { Store } from '@ngxs/store';
import { CartState } from '../store/cart/cart.state';
import {
  AddItem,
  DecreaseQuantity,
  IncreaseQuantity,
  RemoveItem,
} from '../store/cart/cart.actions';
import { ProductDetailShimmerComponent } from '../product-detail-shimmer/product-detail-shimmer.component';

@Component({
  selector: 'app-product-detail-page',
  imports: [
    CommonModule,
    QuantityUpdateComponent,
    ProductDetailShimmerComponent,
  ],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  store = inject(Store);

  product$!: Observable<Product>;

  cartItem$!: Observable<CartItem | null>;

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id'];
    this.product$ = this.productService.getProductDetails(id);

    this.cartItem$ = this.store
      .select(CartState.getCartItem)
      .pipe(map((getCartItem) => getCartItem(id)));
  }

  increaseQuantity(pId: number) {
    this.store.dispatch(new IncreaseQuantity(pId));
  }

  decreaseQuantity(pId: number) {
    this.store.dispatch(new DecreaseQuantity(pId));
  }

  deleteFromCart(pId: number) {
    this.store.dispatch(new RemoveItem(pId));
  }

  addToCart(product: Product) {
    this.store.dispatch(new AddItem(product));
  }
}
