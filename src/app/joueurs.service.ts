import { Joueur } from './joueur';
import { Observable, of, Subject } from 'rxjs';
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

  private histoiresUrl = 'http://localhost:3000/histoire';
  private joueursUrl = 'http://localhost:3000/joueurs';
  private joueurSelected = new Subject<Joueur>();
  joueurSelected$ = this.joueurSelected.asObservable();
  listeModifiee = new Subject<void>();
  listeModifiee$ = this.listeModifiee.asObservable();


  constructor(private http: HttpClient) { }

  getJoueurs(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(this.joueursUrl);
  }

  getJoueursByHistoire(idhistoire: number): Observable<Joueur[]> {
    const joueurhistoire = this.http.get<Joueur[]>(this.joueursUrl)
      .pipe(
        map(joueurs => joueurs.filter(
          joueur => joueur.idhistoire === idhistoire)
        )
      );
    return joueurhistoire;
  }

  addJoueur(joueur: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(this.joueursUrl, joueur, httpOptions);
  }

  deleteJoueur(joueur: Joueur): Observable<Joueur> {
    const id = typeof joueur === 'number' ? joueur : joueur.id;
    const url = `${this.joueursUrl}/${id}`;
    return this.http.delete<Joueur>(url, httpOptions);
  }

  getJoueurById(id: number): Observable<Joueur> {
    const joueur = this.http.get<Joueur>(`${this.joueursUrl}/${id}`);
    return joueur;
  }

  selectJoueur(joueur: Joueur) {
    this.joueurSelected.next(joueur);
  }

  informUpdatedList() {
    this.listeModifiee.next();
  }

  updateJoueur(joueur: Joueur): Observable<any> {
    const id = typeof joueur === 'number' ? joueur : joueur.id;
    const url = `${this.joueursUrl}/${id}`;
    return this.http.put(url, joueur, httpOptions);
  }

}
