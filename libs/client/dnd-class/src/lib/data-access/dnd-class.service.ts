import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDndClassModel } from '@interfaces';
import { Observable } from 'rxjs';

const AUTH_API_URL = '/api/dnd-class';

@Injectable({
  providedIn: 'root',
})
export class DnDClassService {
  private http = inject(HttpClient);

  getAllDnDClasses(): Observable<IDndClassModel[]> {
    return this.http.get<IDndClassModel[]>(`${AUTH_API_URL}`);
  }

  getDnDClass(id: string): Observable<IDndClassModel> {
    return this.http.get<IDndClassModel>(`${AUTH_API_URL}/${id}`);
  }
}
