import { Route } from './app.routes.types';

export const routes: Route[] = [
    { path: 'shop', loadComponent: () => import('./features/shopping/shop/shop.component').then(m => m.ShopComponent), data: { title: 'Shop' } },
    { path: '', redirectTo: 'shop', pathMatch: 'full' }
];
