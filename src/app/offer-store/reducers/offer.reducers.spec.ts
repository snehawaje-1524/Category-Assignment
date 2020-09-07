import { Offer } from 'src/app/models/offer.model';
import { State, reducer } from './offer.reducers';
import { All } from '../actions/offer.actions';


const offerData: Offer = {
    id: 1,
    title: 'Buy 1 Get 1',
    category: 'App Offer',
};

function mockState(
    payload: any,
    statusMessage: string,
    status: boolean,
    isDataArray: boolean
): State {
    return {
        offer: isDataArray ? [payload] : payload,
        success: status,
        message: statusMessage,
    };
}

const newOffer = {
    id: 1,
    title: 'Buy 1 get 1',
    category: 'App Offer',
};
const index = 1;

describe('initialState', () => {
    it('is correct', () => {
        const action: All = {
            type: '[Offer] Get Offer'
        };
        const initialState = { offer: [], message: null, success: null };
        expect(reducer(undefined, action)).toEqual(initialState);
    });
});

describe('When no action is passed', () => {
    it('should return the passed state when no action is passed', () => {
        const passedState: State = {
            offer: [offerData],
            message: null,
            success: null,
        };
        expect(reducer(passedState, Object.assign({}))).toEqual(passedState);
    });
});

describe('Get Offer', () => {
    it('should return the new state after getting all the offers', () => {
        const getQuoteAction: All = {
            type: '[Offer] Get Offer',
        };
        const expectedState = mockState(
            offerData,
            'Offers loaded successfully!',
            true,
            false
        );
        expect(reducer(expectedState, getQuoteAction)).toEqual(expectedState);
    });
});

describe('Add Offer', () => {
    it('returns the new state after adding the offer', () => {
        const addQuoteAction: All = {
            type: '[Offer] Add Offer',
            payload: offerData,
        };
        const expectedState = mockState(
            offerData,
            'Offer added successfully!',
            true,
            false
        );
        expect(reducer(expectedState, addQuoteAction)).toEqual(expectedState);
    });
});

describe('Delete Offer', () => {
    it('should return the new state after deleting the offer', () => {
        const deleteQuoteAction: All = {
            type: '[Offer] Delete Offer',
            payload: 3,
        };
        const expectedState = mockState(
            offerData,
            'Offer delete action triggered successfully!',
            true,
            false
        );
        expect(reducer(expectedState, deleteQuoteAction)).toEqual(expectedState);
    });
});

describe('Update Offer', () => {
    it('should return the new state after updating the offer', () => {
        const payload: { index: number; newOffer: Offer } = {
            index,
            newOffer,
        };
        const updateQuoteAction: All = {
            type: '[Offer] Update Offer',
            payload
        };
        const expectedState = mockState(
            offerData,
            'Offer update action triggered successfully!',
            true,
            false
        );
        expect(reducer(expectedState, updateQuoteAction)).toEqual(expectedState);
    });
});
