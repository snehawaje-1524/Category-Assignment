import { Offer } from '../../models/offer.model';
import { OfferActionTypes, All } from '../actions/offer.actions';

export interface State {
    offer: Offer[];
    added: boolean | null;
    updated: boolean | null;
    deleted: boolean | null;
    loaded: boolean | null;
    message: string | null;
}

export const initialState: State = {
    offer: [],
    message: null,
    added: null,
    updated: null,
    loaded: null,
    deleted: null
};

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        case OfferActionTypes.GET_OFFER: {
            return {
                ...state,
            };
        }
        case OfferActionTypes.LOAD_OFFER: {
            return {
                ...state,
                offer: action.payload,
                message: null,
                loaded: true
            };
        }
        case OfferActionTypes.ADD_OFFER: {
            return {
                ...state
            };

        }
        case OfferActionTypes.ADD_SUCCESS: {
            return {
                ...state,
                message: 'Offer added successfully!',
                added: true
            };
        }
        case OfferActionTypes.UPDATE_OFFER: {
            return {
                ...state
            };

        }
        case OfferActionTypes.UPDATE_SUCCESS: {
            return {
                ...state,
                message: 'Offer updated successfully!',
                updated: true
            };
        }
        case OfferActionTypes.DELETE_OFFER: {
            return {
                ...state
            };

        }
        case OfferActionTypes.DELETE_SUCCESS: {
            return {
                ...state,
                message: 'Offer deleted successfully!',
                deleted: true
            };
        }
        default: {
            return state;
        }
    }
}
