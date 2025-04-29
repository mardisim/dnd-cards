import { Route } from '@angular/router';
import { AuthGuard } from '@dnd-cards/client-auth';
import { DndClassComponent } from './dnd-class.component';

export const DND_CLASS_ROUTES: Route[] = [
  {
    path: 'dnd-classes',
    component: DndClassComponent,
    canActivate: [AuthGuard],
  },
];
