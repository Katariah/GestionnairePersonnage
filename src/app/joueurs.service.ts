import { Joueur } from './joueur';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  private partiesUrl = 'http://localhost:3000/partie';
  private joueursUrl = 'http://localhost:3000/joueurs';

  constructor(private http: HttpClient) { }

  getJoueurs(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(this.joueursUrl);
  }

  getJoueursByPartie (idpartie: number): Observable<Joueur[]> {
    const joueurpartie = this.http.get<Joueur[]>(this.joueursUrl)
    .pipe(
        map(joueurs => joueurs.filter(
                joueur => joueur.idpartie === idpartie)
        )
    );
    return joueurpartie;
  }

  addJoueur(joueur: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(this.joueursUrl, joueur, httpOptions);
  }

  deleteJoueur (joueur: Joueur): Observable<Joueur> {
    const idjoueur = typeof joueur === 'number' ? joueur : joueur.idjoueur;
    const url = `${this.joueursUrl}/${idjoueur}`;
    return this.http.delete<Joueur>(url, httpOptions);
    }

}
