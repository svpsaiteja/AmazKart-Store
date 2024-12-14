import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-menu',
  imports: [CommonModule],
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.scss',
})
export class CategoryMenuComponent {
  @Input() categories!: string[];
  @Input() selectedCategory: string = '';

  @Output() onCategorySelect = new EventEmitter<string>();
}
