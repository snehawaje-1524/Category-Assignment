import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { OfferService } from 'src/app/services/offer.service';
import { Offer } from 'src/app/models/offer.model';
import { UpdateOffer } from 'src/app/offer-store/actions/offer.actions';
import { Observable } from 'rxjs';
import { selectAuthState, AppState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.scss']
})
export class EditOfferComponent implements OnInit {
  offer: Offer;
  editForm: FormGroup;
  getState: Observable<any>;

  constructor(private formBuilder: FormBuilder, private router: Router, private offerService: OfferService,
    private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    let offerId = window.localStorage.getItem('editOfferId');
    if (!offerId) {
      alert('Invalid action.')
      this.router.navigate(['']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      title: [''],
      category: ['']
    });
    this.offerService.getOfferById(+offerId)
      .subscribe(offers => {
        this.editForm.setValue(offers);
      });
  }

  onSubmit() {
    this.store.dispatch(new UpdateOffer(this.editForm.value));
    this.store.subscribe(data => {
      this.router.navigate(['']);
    });
  }
}
