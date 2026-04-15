import { inject } from '@angular/core';
import { ShoppingStateService } from '../../services/shopping-state.service';

export abstract class StateComponent {
	protected readonly shoppingStateService = inject(ShoppingStateService);

	revertToPreviousState() {
		this.shoppingStateService.revertToPreviousState();
	}
}
