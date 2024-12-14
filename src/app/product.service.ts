import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './types/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseApiUrl = 'https://fakestoreapi.com';

  constructor(private httpClient: HttpClient) {}

  getAllProducts() {
    const url = `${this.baseApiUrl}/products`;

    return this.httpClient.get<Product[]>(url);
  }

  getProductsByCategory(category: string) {
    const url = `${this.baseApiUrl}/products/category/${category}`;

    return this.httpClient.get<Product[]>(url);
  }

  getAllCategories() {
    const url = `${this.baseApiUrl}/products/categories`;

    return this.httpClient.get<string[]>(url);
  }
}
