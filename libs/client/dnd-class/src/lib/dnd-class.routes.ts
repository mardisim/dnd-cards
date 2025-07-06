import { Route } from '@angular/router';
import { AuthGuard } from '@dnd-cards/client-auth';
import { FeatureDnDClassListComponent } from './feature/list/dnd-class-list.component';

export const DND_CLASS_ROUTES: Route[] = [
  {
    path: 'dnd-classes',
    component: FeatureDnDClassListComponent,
    canActivate: [AuthGuard],
  },
];
