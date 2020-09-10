import { Offer } from './../../models/offer.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState, selectAuthState } from 'src/app/store/app.states';
import { Store } from '@ngrx/store';
import { OfferService } from 'src/app/services/offer.service';
import { UpdateOffer, GetOffer, AddOffer } from 'src/app/offer-store/actions/offer.actions';

@Component({
  selector: 'app-add-edit-offer',
  templateUrl: './add-edit-offer.component.html',
  styleUrls: ['./add-edit-offer.component.scss']
})
export class AddEditOfferComponent implements OnInit {
  addForm: FormGroup;
  offer: Offer = new Offer();
  getState: Observable<any>;
  offerId: any;
  showUpdate: boolean;
  oldOffer: Offer;

  constructor(private router: Router, private route: ActivatedRoute, private offerService: OfferService,
    // tslint:disable-next-line: align
    private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState);
  }
  ngOnInit(): void {
    if (this.route.snapshot.params && this.route.snapshot.params.offerId) {
      this.offerId = this.route.snapshot.params.offerId;
      this.offerService.getOfferById(this.offerId).subscribe((data: Offer) => {
        this.oldOffer = data;
        this.addEditForm(this.oldOffer);
      });
      this.addEditForm(this.oldOffer);
    }
    this.addEditForm(this.offer);
    this.store.subscribe((data) => {
      if (data && data.offer) {
        if (data.offer.success) {
          this.addForm.reset();
        }
      }
      this.route.data.subscribe((params) => {
        if (params && params.isUpdate) {
          this.showUpdate = params.isUpdate;
        } else {
          this.showUpdate = false;
        }
      });
    });
  }

  private addEditForm(oldOffer?: Offer): void {
    if (oldOffer) {
      this.addForm = new FormGroup({
        id: new FormControl(oldOffer.id),
        title: new FormControl(oldOffer.title),
        category: new FormControl(oldOffer.category),
      });
    } else {
      this.addForm = new FormGroup({
        id: new FormControl(''),
        title: new FormControl(''),
        category: new FormControl(''),
      });
    }
  }

  navigateToAddorEdit(): void {
    if (this.showUpdate) {
      const payload = {
        index: this.offerId,
        newOffer: this.addForm.value,
      };
      this.store.dispatch(new UpdateOffer(payload));
      this.store.dispatch(new GetOffer());
      this.router.navigate(['/']);
    } else {
      this.store.dispatch(new AddOffer(this.addForm.value));
      this.store.dispatch(new GetOffer());
      this.router.navigate(['/']);
    }
  }

}
