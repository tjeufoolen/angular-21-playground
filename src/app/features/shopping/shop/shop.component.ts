import { Component, inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { ShoppingStateService } from '../shopping-state.service';

@Component({
  selector: 'app-shop',
  imports: [NgComponentOutlet],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  protected shoppingStateService = inject(ShoppingStateService);
}
