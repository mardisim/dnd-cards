import { Route } from '@angular/router';
import { AuthGuard } from '@dnd-cards/client/auth';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent),
  },

  { path: '**', redirectTo: '/login' },
];
