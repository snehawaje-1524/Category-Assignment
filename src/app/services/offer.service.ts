import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../models/offer.model';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }
  baseUrl = environment.baseURL + 'offers/';

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.baseUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getOfferById(id: number): Observable<Offer> {
    return this.http.get<Offer>(this.baseUrl + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  createOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.baseUrl, offer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  updateOffer(offerId: number, offer: Offer): Observable<Offer> {
    return this.http.put<Offer>(this.baseUrl + offerId, offer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  deleteOffer(id: number): Observable<Offer> {
    return this.http.delete<Offer>(this.baseUrl + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  // tslint:disable-next-line: typedef
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
