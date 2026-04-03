import { Component, inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { ShoppingStateService } from '../shopping-state.service';
import { WinkelwagenStateComponent } from '../states/winkelwagen/winkelwagen.state.component';

@Component({
  selector: 'app-shop',
  imports: [NgComponentOutlet, WinkelwagenStateComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  protected shoppingStateService = inject(ShoppingStateService);
}
