import { Action } from '@ngrx/store';
import { Offer } from 'src/app/models/offer.model';

export enum OfferActionTypes {
    GET_OFFER = '[Offer] Get Offer',
    ADD_OFFER = '[Offer] Add Offer',
    UPDATE_OFFER = '[Offer] Update Offer',
    DELETE_OFFER = '[Offer] Delete Offer',
    LOAD_OFFER = '[Offer] Load Offer',
    ADD_SUCCESS = '[Offer] Add Success',
    UPDATE_SUCCESS = '[Offer] Update Success',
    DELETE_SUCCESS = '[Offer] Delete Success',
}

export class GetOffer implements Action {
    readonly type = OfferActionTypes.GET_OFFER;
    constructor() { }
}

export class AddOffer implements Action {
    readonly type = OfferActionTypes.ADD_OFFER;
    constructor(public payload: Offer) { }
}

export class UpdateOffer implements Action {
    readonly type = OfferActionTypes.UPDATE_OFFER;
    constructor(public payload: { index: number; newOffer: Offer }) { }
}

export class DeleteOffer implements Action {
    readonly type = OfferActionTypes.DELETE_OFFER;
    constructor(public payload: number) { }
}

export class LoadOffersSuccess implements Action {
    readonly type = OfferActionTypes.LOAD_OFFER;
    constructor(public payload: Offer[]) { }
}

export class AddOffersSuccess implements Action {
    readonly type = OfferActionTypes.ADD_SUCCESS;
    constructor(public payload: Offer) { }
}

export class UpdateOffersSuccess implements Action {
    readonly type = OfferActionTypes.UPDATE_SUCCESS;
    constructor(public payload: Offer) { }
}

export class DeleteOffersSuccess implements Action {
    readonly type = OfferActionTypes.DELETE_SUCCESS;
    constructor() { }
}

export type All =
    | GetOffer
    | AddOffer
    | UpdateOffer
    | DeleteOffer
    | LoadOffersSuccess
    | AddOffersSuccess
    | UpdateOffersSuccess
    | DeleteOffersSuccess;
