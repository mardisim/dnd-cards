import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private authenticationService = inject(AuthenticationService);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.authenticationService.logout();
          location.reload();
        }

        const error = err.error.message || err.statusText;
        console.error(error);
        return throwError(() => error);
      }),
    );
  }
}
