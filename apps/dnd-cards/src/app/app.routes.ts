import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@dnd-cards/client/registration').then(c => c.REGISTRATION_ROUTES),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: '',
    loadChildren: () => import('@dnd-cards/client/spell').then(m => m.SPELL_ROUTES),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
