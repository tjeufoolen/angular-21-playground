import { Component, inject } from '@angular/core';
import { APP_NAME } from '../../tokens';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'app-navbar',
	imports: [RouterModule],
	templateUrl: './navbar.component.html',
	styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
	protected readonly appName = inject(APP_NAME);

	protected readonly links = [
		{ path: '/', name: 'Home' },
		{ path: '/shop', name: 'Shop' },
	];
}
