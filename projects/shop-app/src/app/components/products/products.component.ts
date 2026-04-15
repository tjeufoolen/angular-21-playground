import { Component, inject, OnInit } from '@angular/core';
import { ShoppingStateService } from '../../services/shopping-state.service';
import { NgComponentOutlet } from '@angular/common';
import { ShoppingCartComponent } from '../states';

@Component({
	selector: 'app-products',
	imports: [NgComponentOutlet],
	templateUrl: './products.component.html',
	styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
	protected readonly shoppingStateService = inject(ShoppingStateService);

	ngOnInit(): void {
		this.shoppingStateService.setCurrentState(ShoppingCartComponent);
	}
}
