import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list-shimmer',
  imports: [CommonModule],
  templateUrl: './product-list-shimmer.component.html',
  styleUrl: './product-list-shimmer.component.scss',
})
export class ProductListShimmerComponent {
  shimmers = Array.from({ length: 10 });
}
