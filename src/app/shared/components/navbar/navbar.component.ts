import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Route } from 'app/app.routes.types';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private readonly router = inject(Router);

  protected routes = this.router.config.filter((route): route is Route => route.data?.['title'] && route.path);
}
