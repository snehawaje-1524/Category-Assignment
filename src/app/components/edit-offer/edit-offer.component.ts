import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OfferService } from 'src/app/services/offer.service';
import { Offer } from 'src/app/models/offer.model';
import { UpdateOffer, GetOffer } from 'src/app/offer-store/actions/offer.actions';
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
  offerId: any;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private offerService: OfferService, private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    // tslint:disable-next-line: prefer-const
    this.offerId = this.route.snapshot.params.offerId;
    this.offerService.getOfferById(this.offerId).subscribe((data: Offer) => {
      this.offer = data;
    });

    this.editForm = this.formBuilder.group({
      id: [],
      title: [''],
      category: ['']
    });
    this.offerService.getOfferById(+this.offerId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    const payload = {
      index: this.offerId,
      newOffer: this.editForm.value,
    };
    this.store.dispatch(new UpdateOffer(payload));
    this.store.dispatch(new GetOffer());
    this.router.navigateByUrl('/');
  }
}
