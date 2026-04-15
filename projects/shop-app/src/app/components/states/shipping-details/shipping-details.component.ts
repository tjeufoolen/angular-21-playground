import { Component } from '@angular/core';
import { StateComponent } from '../state.component';
import { PaymentMethodComponent } from '../payment-method/payment-method.component';

@Component({
	selector: 'app-shipping-details',
	imports: [],
	templateUrl: './shipping-details.component.html',
	styleUrl: './shipping-details.component.scss',
})
export class ShippingDetailsComponent extends StateComponent {
	nextState() {
		this.shoppingStateService.setCurrentState(PaymentMethodComponent);
	}
}
