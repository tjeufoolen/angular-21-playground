import { Component } from '@angular/core';
import { StateComponent } from '../state.component';
import { ConfirmOrderComponent } from '../confirm-order/confirm-order.component';

@Component({
	selector: 'app-payment-method',
	imports: [],
	templateUrl: './payment-method.component.html',
	styleUrl: './payment-method.component.scss',
})
export class PaymentMethodComponent extends StateComponent {
	nextState() {
		this.shoppingStateService.setCurrentState(ConfirmOrderComponent);
	}
}
