import { Partie } from './partie';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  private partiesUrl = 'http://localhost:3000/parties';
  private joueursUrl = 'http://localhost:3000/joueurs';

  constructor(private http: HttpClient) { }

  getParties(): Observable<Partie[]> {
    return this.http.get<Partie[]>(this.partiesUrl);
  }

  addPartie(partie: Partie): Observable<Partie> {
    return this.http.post<Partie>(this.partiesUrl, partie, httpOptions);
  }

  deletePartie (partie: Partie): Observable<Partie> {
    const id = typeof partie === 'number' ? partie : partie.id;
    const url = `${this.partiesUrl}/${id}`;
    return this.http.delete<Partie>(url, httpOptions);
    }

  // addJoueur(joueur: Joueur): Observable<Joueur> {
  //   return this.http.post<Joueur>(this.joueursUrl, joueur, httpOptions);
  // }

}
