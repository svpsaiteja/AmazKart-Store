import { Component } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { ProductListShimmerComponent } from '../product-list-shimmer/product-list-shimmer.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../product.service';
import { Product } from '../types/Product';
import { CommonModule } from '@angular/common';
import { CategoryMenuShimmerComponent } from '../category-menu-shimmer/category-menu-shimmer.component';

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    ProductListComponent,
    CategoryMenuComponent,
    ProductListShimmerComponent,
    CategoryMenuShimmerComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  products$!: Observable<Product[]>;
  categories$!: Observable<string[]>;

  selectedCategory = new BehaviorSubject('');

  isLoading = false;

  constructor(private ps: ProductService) {
    this.products$ = this.selectedCategory.pipe(
      tap(() => (this.isLoading = true)),
      switchMap((category) =>
        category
          ? this.ps.getProductsByCategory(category)
          : this.ps.getAllProducts()
      ),
      tap(() => (this.isLoading = false))
    );

    this.categories$ = this.ps.getAllCategories();
  }

  setSelectedCategory(category: string) {
    this.selectedCategory.next(category);
  }
}
