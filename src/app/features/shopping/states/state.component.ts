import { inject } from '@angular/core';
import { ShoppingStateService } from '../shopping-state.service';

export abstract class StateComponent {
  protected readonly shoppingStateService = inject(ShoppingStateService);
}
