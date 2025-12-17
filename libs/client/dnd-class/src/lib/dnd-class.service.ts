import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IDndClassModel as IDndClassesModel } from '@interfaces';
import { Observable } from 'rxjs';

const AUTH_API_URL = '/api/dnd-class';

@Injectable({
  providedIn: 'root',
})
export class DnDClassesService {
  private http = inject(HttpClient);

  getAllDnDClasses(): Observable<IDndClassesModel[]> {
    return this.http.get<IDndClassesModel[]>(`${AUTH_API_URL}`);
  }

  getDnDClass(id: string): Observable<IDndClassesModel> {
    return this.http.get<IDndClassesModel>(`${AUTH_API_URL}/${id}`);
  }
}
