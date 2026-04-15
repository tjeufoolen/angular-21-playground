import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => WelcomeComponent,
	},
	{
		path: 'shop',
		loadChildren: () =>
			loadRemoteModule({ remoteName: 'shopApp', exposedModule: './routes' }).then((m) => {
				console.log(m);
				return m.routes;
			}),
	},
];
