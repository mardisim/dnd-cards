import { Route } from '@angular/router';
import { SpellComponent } from './spell.component';
import { AuthGuard } from '@dnd-cards/client-auth';

export const SPELL_ROUTES: Route[] = [
  {
    path: 'spell',
    component: SpellComponent,
    canActivate: [AuthGuard],
  },
];
