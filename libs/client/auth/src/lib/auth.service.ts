import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IRegisterUser, ISignedUser } from '@dnd-cards/shared/interfaces';

const AUTH_BEARER_STORAGE_KEY = 'Bearer';
const CURRENT_USER_STORAGE_KEY = 'currentUser';
const AUTH_API_URL = '/api/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private http = inject(HttpClient);
  private _currentUser = new BehaviorSubject<ISignedUser | null>(
    JSON.parse(localStorage.getItem(CURRENT_USER_STORAGE_KEY) as string),
  );
  private _isAuthenticated = false;

  public currentUser = this._currentUser.asObservable();

  constructor() {
    this._isAuthenticated = !!this.getUserToken();
  }

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  getUserToken(): string | null {
    return localStorage.getItem(AUTH_BEARER_STORAGE_KEY);
  }

  login(username: string, password: string) {
    return this.http.post<ISignedUser>(`${AUTH_API_URL}/login`, { username, password }).pipe(
      map(user => {
        if (user && user.token) {
          this._currentUser.next(user);
          localStorage.setItem(AUTH_BEARER_STORAGE_KEY, JSON.stringify(user.token));
          localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user));
          this._isAuthenticated = true;
        }

        return user;
      }),
    );
  }

  register(user: IRegisterUser) {
    return this.http.post(`${AUTH_API_URL}/register`, user);
  }

  logout() {
    localStorage.removeItem(AUTH_BEARER_STORAGE_KEY);
    localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    this._isAuthenticated = false;
    this._currentUser.next(null);
  }
}
