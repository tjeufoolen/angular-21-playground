import { Component } from '@angular/core';
import { StateComponent } from '../state.component';
import { OrderPlacedComponent } from '../order-placed/order-placed.component';

@Component({
	selector: 'app-confirm-order',
	imports: [],
	templateUrl: './confirm-order.component.html',
	styleUrl: './confirm-order.component.scss',
})
export class ConfirmOrderComponent extends StateComponent {
	nextState() {
		this.shoppingStateService.setCurrentState(OrderPlacedComponent);
	}
}
