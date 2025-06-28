import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ICreateUser, ILoginUser, ISignedUser } from '@interfaces';
import { LocalStorageService } from '@dnd-cards/client-utils';

const ACCESS_TOKEN = 'Bearer';
const REFRESH_TOKEN = 'RefreshToken';
const CURRENT_USER_STORAGE_KEY = 'currentUser';
const AUTH_API_URL = '/api/auth';

export type Tokens = [string, string];
export type TokenResponse = { accessToken: string; refreshToken: string };
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly localStorage = inject(LocalStorageService);
  private readonly http = inject(HttpClient);
  private readonly httpBackend = inject(HttpBackend);
  private readonly httpBypass = new HttpClient(this.httpBackend);

  private _isLoggedIn$ = new BehaviorSubject(!!this.getUserToken());
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private _currentUser = new BehaviorSubject<ISignedUser | null>(
    JSON.parse(this.localStorage.getItem(CURRENT_USER_STORAGE_KEY) as string),
  );

  public currentUser = this._currentUser.asObservable();

  isLoggedIn(): boolean {
    return this._isLoggedIn$.value;
  }

  getUserToken(): string | null {
    return this.localStorage.getItem(ACCESS_TOKEN);
  }

  refreshAccessToken(): Observable<TokenResponse> {
    const headers = new HttpHeaders({ Authorization: `Bearer ${this.localStorage.getItem(REFRESH_TOKEN)}` });
    return this.httpBypass.get<TokenResponse>(`${AUTH_API_URL}/refresh`, { headers }).pipe(
      tap(response => {
        this.setTokens([response.accessToken, response.refreshToken]);
      }),
      catchError(error => {
        this.removeTokens();
        throw error;
      }),
    );
  }

  login({ username, password }: ILoginUser) {
    return this.http.post<ISignedUser>(`${AUTH_API_URL}/login`, { username, password }).pipe(
      map(user => {
        if (user && user.accessToken && user.refreshToken) {
          this._currentUser.next(user);
          this.setTokens([user.accessToken, user.refreshToken]);
          this.localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(user));
          this._isLoggedIn$.next(true);
        }

        return user;
      }),
    );
  }

  register(user: ICreateUser) {
    return this.http.post(`${AUTH_API_URL}/register`, user);
  }

  logout() {
    this.removeTokens();
    this.localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
    this._isLoggedIn$.next(false);
    this._currentUser.next(null);
  }

  setTokens([accessToken, refreshToken]: Tokens) {
    this.localStorage.setItem(ACCESS_TOKEN, accessToken);
    this.localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeTokens() {
    this.localStorage.removeItem(ACCESS_TOKEN);
    this.localStorage.removeItem(REFRESH_TOKEN);
  }
}
