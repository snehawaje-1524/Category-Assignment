import { Action } from '@ngrx/store';
import { Offer } from 'src/app/models/offer.model';

export const GET_OFFER = '[Offer] Get Offer';
export const ADD_OFFER = '[Offer] Add Offer';
export const UPDATE_OFFER = '[Offer] Update Offer';
export const DELETE_OFFER = '[Offer] Delete Offer';
export const LOAD_OFFER = '[Offer] Load Offer';
export const ADD_SUCCESS = '[Offer] Add Success';
export const UPDATE_SUCCESS = '[Offer] Update Success';
export const DELETE_SUCCESS = '[Offer] Delete Success';


export class GetOffer implements Action {
    readonly type = GET_OFFER;
    constructor() { }
}

export class AddOffer implements Action {
    readonly type = ADD_OFFER;
    constructor(public payload: Offer) { }
}

export class UpdateOffer implements Action {
    readonly type = UPDATE_OFFER;
    constructor(public payload: { index: number; newOffer: Offer }) { }
}

export class DeleteOffer implements Action {
    readonly type = DELETE_OFFER;
    constructor(public payload: number) { }
}

export class LoadOffersSuccess implements Action {
    readonly type = LOAD_OFFER;
    constructor(public payload: Offer[]) { }
}

export class AddOffersSuccess implements Action {
    readonly type = ADD_SUCCESS;
    constructor(public payload: Offer) { }
}

export class UpdateOffersSuccess implements Action {
    readonly type = UPDATE_SUCCESS;
    constructor(public payload: Offer) { }
}

export class DeleteOffersSuccess implements Action {
    readonly type = DELETE_SUCCESS;
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
