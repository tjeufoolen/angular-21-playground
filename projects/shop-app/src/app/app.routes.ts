import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'products',
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./components/products/products.component').then(
						(m) => m.ProductsComponent,
					),
			},
			{
				path: ':id',
				loadComponent: () =>
					import('./components/product-card/product-card.component').then(
						(m) => m.ProductCardComponent,
					),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'products',
	},
];
