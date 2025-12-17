import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { first } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { AuthenticationService } from '@dnd-cards/client-auth';
import { ToastService, ToastType } from '@dnd-cards/client-ui';
import { CustomValidators } from '@dnd-cards/client-utils';
import { ICreateUser } from '@interfaces';

type ICreateUserForm = {
  [K in keyof ICreateUser]: FormControl<ICreateUser[K]>;
} & {
  passwordConfirm?: FormControl<string | null>;
};
@Component({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: 'register.component.html',
  styleUrl: 'register.component.scss',
  host: {
    class: 'd-flex align-items-center justify-content-center py-5',
  },
})
export class RegisterComponent {
  private router = inject(Router);
  private readonly toastService = inject(ToastService);
  private authenticationService = inject(AuthenticationService);

  registerForm = new FormGroup<ICreateUserForm>({
    firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, CustomValidators.passwordStrength({ minLength: 6 })],
    }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
  });

  constructor() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/']);
    }

    this.registerForm.addControl(
      'passwordConfirm',
      new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, CustomValidators.isEqualWith(this.registerForm.controls.password)],
      }),
    );
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.registerForm.removeControl('passwordConfirm');

    this.authenticationService
      .register(this.registerForm.value as ICreateUser)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.toastService.show('Successfully Registered', ToastType.success);
          this.router.navigate(['/login']);
        },
        error: ({ error: { message } }) => {
          this.toastService.show(message, ToastType.danger);
        },
      });
  }
}
