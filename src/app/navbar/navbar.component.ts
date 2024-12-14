import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { CartState } from '../store/cart/cart.state';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  cartQuantity$ = inject(Store).select(CartState.cartQuantity);
}
