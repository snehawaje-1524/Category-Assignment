import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/services/offer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddOffer, GetOffer } from 'src/app/offer-store/actions/offer.actions';
import { Offer } from 'src/app/models/offer.model';
import { AppState, selectAuthState } from '../../store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {
  addForm: FormGroup;
  offer: Offer = new Offer();
  getState: Observable<any>;

  constructor(private formBuilder: FormBuilder, private router: Router,
    // tslint:disable-next-line: align
    private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [],
      title: [''],
      category: ['']
    });
  }

  // tslint:disable-next-line: typedef
  onSubmit() {
    this.store.dispatch(new AddOffer(this.addForm.value));
    this.store.dispatch(new GetOffer());
    this.store.subscribe(data => {
      this.router.navigate(['']);
    });
  }

}
