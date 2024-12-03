import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthenticationService } from '@dnd-cards/client/auth';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormErrorModule } from '@dnd-cards/client/utils';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormErrorModule,
    MatSnackBarModule,
  ],
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authenticationService = inject(AuthenticationService);
  private snackBar = inject(MatSnackBar);

  loginForm!: FormGroup;

  constructor() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.authenticationService
      .login(this.loginForm?.get('username')?.value, this.loginForm?.get('password')?.value)
      .pipe(take(1))
      .subscribe({
        error: ({ error: { message } }) => {
          this.snackBar.open(message, '', { duration: 1000 });
        },
        complete: () => {
          this.router.navigateByUrl('/home');
        },
      });
  }
}
