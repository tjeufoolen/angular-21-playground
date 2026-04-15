import { computed, Injectable, signal, Type } from '@angular/core';
import { StateComponent } from '../components/states/state.component';
import { Product } from '../models/product';
import { Cart } from '../models/cart';
import { Adres } from '../models/adres';
import { PaymentMethod } from '../models/payment-method';

@Injectable({
	providedIn: 'root',
})
export class ShoppingStateService {
	private readonly _current = signal<Type<StateComponent> | undefined>(undefined);
	private readonly _history = signal<Type<StateComponent>[]>([]);

	private readonly _cart = signal<Cart>({ items: new Map() });
	private readonly _shippingDetails = signal<Adres | undefined>(undefined);
	private readonly _paymentMethod = signal<PaymentMethod | undefined>(undefined);

	readonly current = this._current.asReadonly();
	readonly cart = this._cart.asReadonly();
	readonly cartSum = computed(() =>
		Array.from(this._cart().items.values()).reduce(
			(prev, curr) => prev + curr.item.price * curr.quantity,
			0,
		),
	);
	readonly shippingDetails = this._shippingDetails.asReadonly();
	readonly paymentMethod = this._paymentMethod.asReadonly();

	setCurrentState(state: Type<StateComponent>): void {
		this._history.update((history) => {
			const currentState = this.current();
			if (currentState) {
				history.push(currentState);
			}
			return history;
		});
		this._current.set(state);
	}

	revertToPreviousState(): void {
		if (this._history().length == 0) {
			return;
		}
		this._current.set(this._history().pop()!);
	}

	addOneProductQuantityToCart(product: Product) {
		this.addProductQuantitiesToCart(product, 1);
	}

	addProductQuantitiesToCart(product: Product, quantity: number) {
		this._cart.update((currentCart) => {
			const foundItem = currentCart.items.get(product.id);
			if (foundItem) {
				foundItem.quantity += quantity;
			} else {
				currentCart.items.set(product.id, { item: product, quantity });
			}
			return currentCart;
		});
	}

	removeOneProductQuantityFromCart(product: Product) {
		this._cart.update((currentCart) => {
			const foundItem = currentCart.items.get(product.id);
			if (!foundItem) {
				return currentCart;
			}

			if (foundItem.quantity == 1) {
				currentCart.items.delete(product.id);
			} else {
				foundItem.quantity -= 1;
			}
			return currentCart;
		});
	}

	removeAllProductsQuantitiesFromCart(product: Product) {
		this._cart.update((currentCart) => {
			const foundItem = currentCart.items.get(product.id);
			if (!foundItem) {
				return currentCart;
			}

			currentCart.items.delete(product.id);
			return currentCart;
		});
	}

	setShippingDetails(adres: Adres) {
		this._shippingDetails.set(adres);
	}

	setPaymentMethod(paymentMethod: PaymentMethod) {
		this._paymentMethod.set(paymentMethod);
	}
}
