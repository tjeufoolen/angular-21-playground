import { Product } from './product';

export interface CartItem {
	item: Product;
	quantity: number;
}

export interface Cart {
	items: Map<CartItem['item']['id'], CartItem>;
}
