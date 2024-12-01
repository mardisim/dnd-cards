import { Component, inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AlertService } from '@dnd-cards/client/alert';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '@dnd-cards/client/auth';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private authenticationService = inject(AuthenticationService);
  private alertService = inject(AlertService);

  registerForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor() {
    if (this.authenticationService.isAuthenticated) {
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

  get f(): { [p: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error: ({ error: { message } }) => {
          this.alertService.error(message);
          this.loading = false;
        },
      });
  }
}
