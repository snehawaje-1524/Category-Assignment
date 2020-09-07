import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { OfferService } from '../../services/offer.service';
import {
    OfferActionTypes, GetOffer, LoadOffersSuccess, AddOffersSuccess, AddOffer, UpdateOffer,
    UpdateOffersSuccess, DeleteOffer, DeleteOffersSuccess,
} from '../actions/offer.actions';

@Injectable()
export class OfferEffects {
    constructor(
        private actions: Actions,
        private offerService: OfferService) { }

    @Effect({ dispatch: true })
    GetOffer: Observable<any> = this.actions.pipe(
        ofType(OfferActionTypes.GET_OFFER),
        map((action: GetOffer) => action),
        mergeMap(payload => {
            return this.offerService.getOffers().pipe(
                map((data) => new LoadOffersSuccess(data)));
        }));

    @Effect({ dispatch: true })
    AddOffer: Observable<any> = this.actions.pipe(
        ofType(OfferActionTypes.ADD_OFFER),
        map((action: AddOffer) => action.payload),
        mergeMap(payload => {
            return this.offerService.createOffer(payload).pipe(
                map((data) => {
                    if (data) {
                        // tslint:disable-next-line: no-unused-expression
                        return new AddOffersSuccess(data);
                    }
                }));
        }));

    @Effect({ dispatch: true })
    UpdateOffer: Observable<any> = this.actions.pipe(
        ofType(OfferActionTypes.UPDATE_OFFER),
        map((action: UpdateOffer) => action.payload),
        mergeMap(payload => {
            return this.offerService.updateOffer(payload.index, payload.newOffer).pipe(
                map((data) => {
                    if (data) {
                        // tslint:disable-next-line: no-unused-expression
                        return new UpdateOffersSuccess(data);
                    }
                }));
        }));

    @Effect({ dispatch: true })
    DeleteOffer: Observable<any> = this.actions.pipe(
        ofType(OfferActionTypes.DELETE_OFFER),
        map((action: DeleteOffer) => action.payload),
        mergeMap(payload => {
            return this.offerService.deleteOffer(payload).pipe(
                map((data) => {
                    // tslint:disable-next-line: no-unused-expression
                    return new DeleteOffersSuccess();
                }));
        }));
}
