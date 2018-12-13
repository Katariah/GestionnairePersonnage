import { Histoire } from './histoire';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HistoireService {

  private histoiresUrl = 'http://localhost:3000/histoires';
  private joueursUrl = 'http://localhost:3000/joueurs';

  constructor(private http: HttpClient) { }

  getHistoires(): Observable<Histoire[]> {
    return this.http.get<Histoire[]>(this.histoiresUrl);
  }

  addHistoire(histoire: Histoire): Observable<Histoire> {
    return this.http.post<Histoire>(this.histoiresUrl, histoire, httpOptions);
  }

  deleteHistoire (histoire: Histoire): Observable<Histoire> {
    const id = typeof histoire === 'number' ? histoire : histoire.id;
    const url = `${this.histoiresUrl}/${histoire.id}`;
    return this.http.delete<Histoire>(url, httpOptions);
    }

  // addJoueur(joueur: Joueur): Observable<Joueur> {
  //   return this.http.post<Joueur>(this.joueursUrl, joueur, httpOptions);
  // }

}
