import { Histoire } from './histoire';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HistoireService {

  private universUrl = 'http://localhost:3000/univers';
  private histoiresUrl = 'http://localhost:3000/histoires';
  private persosUrl = 'http://localhost:3000/persos';

  constructor(private http: HttpClient) { }

  getHistoires(): Observable<Histoire[]> {
    return this.http.get<Histoire[]>(this.histoiresUrl);
  }

  getHistoirebyUnivers(idunivers: number): Observable<Histoire[]> {
    const histoireuniv = this.http.get<Histoire[]>(this.histoiresUrl)
    .pipe(
      map(histoires => histoires.filter(
        histoire => histoire.idunivers === idunivers)
      )
    );
  return histoireuniv;
  }

  addHistoire(histoire: Histoire): Observable<Histoire> {
    return this.http.post<Histoire>(this.histoiresUrl, histoire, httpOptions);
  }

  deleteHistoire (histoire: Histoire): Observable<Histoire> {
    const id = typeof histoire === 'number' ? histoire : histoire.id;
    const url = `${this.histoiresUrl}/${histoire.id}`;
    return this.http.delete<Histoire>(url, httpOptions);
    }

    getHistoireById(id: number): Observable<Histoire> {
      const histoire = this.http.get<Histoire>(`${this.histoiresUrl}/${id}`);
      return histoire;
    }

  // addPerso(perso: Perso): Observable<Perso> {
  //   return this.http.post<Perso>(this.persosUrl, perso, httpOptions);
  // }

}
