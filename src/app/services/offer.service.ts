import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from '../models/offer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/offers/';

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.baseUrl);
  }

  getOfferById(id: number): Observable<Offer> {
    return this.http.get<Offer>(this.baseUrl + id);
  }

  createOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.baseUrl, offer);
  }

  updateOffer(offer: Offer): Observable<Offer> {
    return this.http.put<Offer>(this.baseUrl + offer.id, offer);
  }

  deleteOffer(id: number): Observable<Offer> {
    return this.http.delete<Offer>(this.baseUrl + id);
  }
}
