import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ICreateUser, ISignedUser } from '@dnd-cards/shared/interfaces';
import { LocalStorageService } from '@dnd-cards/client/utils';

const ACCESS_TOKEN = 'Bearer';
const REFRESH_TOKEN = 'RefreshToken';
const CURRENT_USER_STORAGE_KEY = 'currentUser';
const AUTH_API_URL = '/api/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly localStorage = inject(LocalStorageService);
  private http = inject(HttpClient);

  private _currentUser = new BehaviorSubject<ISignedUser | null>(
    JSON.parse(this.localStorage.getItem(CURRENT_USER_STORAGE_KEY) as string),
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
    return this.localStorage.getItem(ACCESS_TOKEN);
  }

  login(username: string, password: string) {
    return this.http.post<ISignedUser>(`${AUTH_API_URL}/login`, { username, password }).pipe(
      map(user => {
        if (user && user.accessToken && user.refreshToken) {
          this._currentUser.next(user);
          this.localStorage.setItem(ACCESS_TOKEN, user.accessToken);
          this.localStorage.setItem(REFRESH_TOKEN, user.refreshToken);
          this._isAuthenticated = true;
        }

        return user;
      }),
    );
  }

  register(user: ICreateUser) {
    return this.http.post(`${AUTH_API_URL}/register`, user);
  }

  logout() {
    this.localStorage.removeItem(ACCESS_TOKEN);
    this.localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    this._isAuthenticated = false;
    this._currentUser.next(null);
  }
}
