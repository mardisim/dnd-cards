import { Component, inject } from '@angular/core';
import { ISignedUser } from '@interfaces';
import { AuthenticationService } from '@dnd-cards/client/auth';
import { Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({ templateUrl: 'home.component.html', standalone: true })
export class HomeComponent {
  private authenticationService = inject(AuthenticationService);

  currentUser!: ISignedUser | null;
  currentUserSubscription: Subscription;

  loading = false;
  submitted = false;

  constructor() {
    this.currentUserSubscription = this.authenticationService.currentUser.pipe(takeUntilDestroyed()).subscribe(user => {
      this.currentUser = user;
    });
  }
}
