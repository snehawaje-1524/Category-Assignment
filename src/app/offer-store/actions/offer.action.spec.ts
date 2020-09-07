import { Offer } from 'src/app/models/offer.model';
import {
    GetOffer, AddOffer, AddOffersSuccess, LoadOffersSuccess, UpdateOffer,
    UpdateOffersSuccess
} from './offer.actions';

const newOffer = {
    id: 1,
    title: 'Buy 1 get 1',
    category: 'App Offer',
};
const index = 1;

describe('GetOffer', () => {
    it('should create an action of type add offer', () => {
        const action = new GetOffer();
        expect(action.type).toEqual('[Offer] Get Offer');
    });
});

describe('LoadOffersSuccess', () => {
    it('should create an action on load all offers', () => {
        const payload: Offer[] = [
            {
                id: 1,
                title: 'Buy 1 get 1',
                category: 'App Offer',
            },
            {
                id: 2,
                title: 'Buy 1 get 2',
                category: 'New User Offer',
            }
        ];
        const action = new LoadOffersSuccess(payload);
        expect({ ...action }).toEqual({
            type: '[Offer] Load Offer',
            payload,
        });
    });
});

describe('AddOffer', () => {
    it('should create an action to add offer', () => {
        const action = new AddOffer(newOffer);
        expect(action.type).toEqual('[Offer] Add Offer');
    });
});

describe('AddOffersSuccess', () => {
    it('should create an action on add offer success', () => {
        const payload: Offer = {
            id: 1,
            title: 'Buy 1 get 1',
            category: 'App Offer',
        };
        const action = new AddOffersSuccess(payload);
        expect({ ...action }).toEqual({
            type: '[Offer] Add Success',
            payload,
        });
    });
});

describe('UpdateOffer', () => {
    it('should create an action to update offer', () => {
        const payload: { index: number; newOffer: Offer } = {
            index,
            newOffer,
        };
        const action = new UpdateOffer(payload);
        expect({ ...action }).toEqual({
            type: '[Offer] Update Offer',
            payload,
        });
    });
});

describe('UpdateOffersSuccess', () => {
    it('should create an action on update offer success', () => {
        const payload: Offer = {
            id: 1,
            title: 'Buy 1 get 1',
            category: 'App Offer',
        };
        const action = new UpdateOffersSuccess(payload);
        expect({ ...action }).toEqual({
            type: '[Offer] Update Success',
            payload,
        });
    });
});

