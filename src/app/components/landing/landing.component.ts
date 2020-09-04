import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, selectAuthState } from '../../store/app.states';
import { LogOut } from '../../store/actions/auth.actions';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { OfferService } from '../../services/offer.service';
import { Offer } from 'src/app/models/offer.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;
  offers: Offer[];

  constructor(private router: Router, private offerService: OfferService,
    private store: Store<AppState>
  ) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
    this.offerService.getOffers()
      .subscribe(offers => {
        this.offers = offers;
        console.log(this.offers);
      });
  }

  logOut(): void {
    this.store.dispatch(new LogOut);
  }

  deleteOffer(offer: Offer): void {
    this.offerService.deleteOffer(offer.id)
      .subscribe(data => {
        this.offers = this.offers.filter(u => u !== offer);
      })
  };

  editOffer(offer: Offer): void {
    window.localStorage.removeItem("editOfferId");
    window.localStorage.setItem("editOfferId", offer.id.toString());
    this.router.navigate(['edit-offer']);
  };

  addOffer(): void {
    this.router.navigate(['add-offer']);
  };
}
