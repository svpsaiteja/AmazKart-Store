import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-update',
  imports: [],
  templateUrl: './quantity-update.component.html',
  styleUrl: './quantity-update.component.scss',
})
export class QuantityUpdateComponent {
  @Input() quantity!: number;
  @Output() onIncrease = new EventEmitter();
  @Output() onDecrease = new EventEmitter();
}
