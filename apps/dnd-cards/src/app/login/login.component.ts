import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthenticationService } from '@dnd-cards/client/auth';
import { CommonModule } from '@angular/common';
import { AlertService } from '@dnd-cards/client/alert';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authenticationService = inject(AuthenticationService);
  private alertService = inject(AlertService);

  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor() {
    if (this.authenticationService.isAuthenticated) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f(): { [p: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f['username'].value, this.f['password'].value)
      .pipe(take(1))
      .subscribe({
        complete: () => {
          this.router.navigate(['/home']);
        },
        error: ({ error = {} }) => {
          const { message } = error;
          this.alertService.error(message);
          console.error(error);
          this.loading = false;
        },
      });
  }
}
