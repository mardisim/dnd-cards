import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISpellModel } from '@interfaces';
import { Observable } from 'rxjs';

const AUTH_API_URL = '/api/spell';

@Injectable({
  providedIn: 'root',
})
export class SpellService {
  private http = inject(HttpClient);

  getAllSpells(): Observable<ISpellModel[]> {
    return this.http.get<ISpellModel[]>(`${AUTH_API_URL}`);
  }

  getSpell(id: number): Observable<ISpellModel> {
    return this.http.get<ISpellModel>(`${AUTH_API_URL}/${id}`);
  }
}
