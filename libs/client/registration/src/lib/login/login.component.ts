import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthenticationService } from '@dnd-cards/client-auth';
import { ToastService, ToastType } from '@dnd-cards/client-ui';
import { ILoginUser } from '@interfaces';

type ILoginUserForm = {
  [K in keyof ILoginUser]: FormControl<ILoginUser[K]>;
};
@Component({
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'd-flex align-items-center justify-content-center py-5',
  },
})
export class LoginComponent {
  private readonly router = inject(Router);
  private readonly toastService = inject(ToastService);
  private authenticationService = inject(AuthenticationService);

  loginForm = new FormGroup<ILoginUserForm>({
    username: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  constructor() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
  }

  submit() {
    console.log('this.loginForm.invalid', this.loginForm.invalid);

    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService
      .login(this.loginForm.value as ILoginUser)
      .pipe(take(1))
      .subscribe({
        error: ({ error: { message } }) => {
          this.toastService.show(message, ToastType.danger);
        },
        complete: () => {
          this.router.navigateByUrl('/home');
        },
      });
  }
}
