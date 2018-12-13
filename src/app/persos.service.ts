import { Perso } from './perso';
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
export class PersosService {

  private histoiresUrl = 'http://localhost:3000/histoire';
  private persosUrl = 'http://localhost:3000/persos';
  private persoSelected = new Subject<Perso>();
  persoSelected$ = this.persoSelected.asObservable();
  listeModifiee = new Subject<void>();
  listeModifiee$ = this.listeModifiee.asObservable();


  constructor(private http: HttpClient) { }

  getPersos(): Observable<Perso[]> {
    return this.http.get<Perso[]>(this.persosUrl);
  }

  getPersosByHistoire(idhistoire: number): Observable<Perso[]> {
    const persohistoire = this.http.get<Perso[]>(this.persosUrl)
      .pipe(
        map(persos => persos.filter(
          perso => perso.idhistoire === idhistoire)
        )
      );
    return persohistoire;
  }

  addPerso(perso: Perso): Observable<Perso> {
    return this.http.post<Perso>(this.persosUrl, perso, httpOptions);
  }

  deletePerso(perso: Perso): Observable<Perso> {
    const id = typeof perso === 'number' ? perso : perso.id;
    const url = `${this.persosUrl}/${id}`;
    return this.http.delete<Perso>(url, httpOptions);
  }

  getPersoById(id: number): Observable<Perso> {
    const perso = this.http.get<Perso>(`${this.persosUrl}/${id}`);
    return perso;
  }

  selectPerso(perso: Perso) {
    this.persoSelected.next(perso);
  }

  informUpdatedList() {
    this.listeModifiee.next();
  }

  updatePerso(perso: Perso): Observable<any> {
    const id = typeof perso === 'number' ? perso : perso.id;
    const url = `${this.persosUrl}/${id}`;
    return this.http.put(url, perso, httpOptions);
  }

}
