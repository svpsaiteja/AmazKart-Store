import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product-detail-page/product-detail-page.component').then(
        (m) => m.ProductDetailPageComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart-page/cart-page.component').then(
        (m) => m.CartPageComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (m) => m.HomePageComponent
      ),
  },
];
