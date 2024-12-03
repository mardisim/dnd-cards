import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { first } from 'rxjs/operators';

import { CommonModule } from '@angular/common';
import { AuthenticationService } from '@dnd-cards/client/auth';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormErrorModule } from '@dnd-cards/client/utils';
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
  templateUrl: 'register.component.html',
  styleUrl: 'register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authenticationService = inject(AuthenticationService);
  private snackBar = inject(MatSnackBar);

  registerForm!: FormGroup;

  constructor() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.authenticationService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.snackBar.open('Registration successfull');
          this.router.navigate(['/login']);
        },
        error: ({ error: { message } }) => {
          this.snackBar.open(message);
        },
      });
  }
}
