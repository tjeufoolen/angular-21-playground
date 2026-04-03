import { Component, inject } from '@angular/core';
import { ShoppingStateService } from '../shopping-state.service';

@Component({
  imports: [],
  template: '',
})
export abstract class StateComponent {
  protected readonly shoppingStateService = inject(ShoppingStateService);
}
