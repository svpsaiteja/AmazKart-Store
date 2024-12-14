import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./product-detail-page/product-detail-page.component').then(
        (m) => m.ProductDetailPageComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart-page/cart-page.component').then(
        (m) => m.CartPageComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
];
