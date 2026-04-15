import { Component } from '@angular/core';
import { StateComponent } from '../state.component';
import { ShippingDetailsComponent } from '../shipping-details/shipping-details.component';

@Component({
	selector: 'app-shopping-cart',
	imports: [],
	templateUrl: './shopping-cart.component.html',
	styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent extends StateComponent {
	nextState() {
		this.shoppingStateService.setCurrentState(ShippingDetailsComponent);
	}
}
