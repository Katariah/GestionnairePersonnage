import { Univers } from './univers';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UniversService {

  private universUrl = 'http://localhost:3000/univers';
  private histoiresUrl = 'http://localhost:3000/histoires';
  private persosUrl = 'http://localhost:3000/persos';

  constructor(private http: HttpClient) { }

  getUnivers(): Observable<Univers[]> {
    return this.http.get<Univers[]>(this.universUrl);
  }

  addUnivers(univers: Univers): Observable<Univers> {
    return this.http.post<Univers>(this.universUrl, univers, httpOptions);
  }

  deleteUnivers (univers: Univers): Observable<Univers> {
    const id = typeof univers === 'number' ? univers : univers.id;
    const url = `${this.universUrl}/${univers.id}`;
    return this.http.delete<Univers>(url, httpOptions);
    }

  // addPerso(perso: Perso): Observable<Perso> {
  //   return this.http.post<Perso>(this.persosUrl, perso, httpOptions);
  // }

}
