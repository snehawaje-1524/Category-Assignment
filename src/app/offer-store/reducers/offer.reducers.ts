import { Offer } from '../../models/offer.model';
import { All, GET_OFFER, LOAD_OFFER, ADD_OFFER, ADD_SUCCESS, UPDATE_OFFER, UPDATE_SUCCESS, DELETE_OFFER, DELETE_SUCCESS } from '../actions/offer.actions';

export interface State {
    offer: Offer[];
    success: boolean | null;
    message: string | null;
}

export const initialState: State = {
    offer: [],
    message: null,
    success: null
};

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        case GET_OFFER: {
            return {
                ...state,
            };
        }
        case LOAD_OFFER: {
            return {
                ...state,
                offer: action.payload,
                message: null,
            };
        }
        case ADD_OFFER: {
            return {
                ...state
            };

        }
        case ADD_SUCCESS: {
            return {
                ...state,
                message: 'Offer added successfully!',
            };
        }
        case UPDATE_OFFER: {
            return {
                ...state
            };

        }
        case UPDATE_SUCCESS: {
            return {
                ...state,
                message: 'Offer updated successfully!',
            };
        }
        case DELETE_OFFER: {
            return {
                ...state
            };

        }
        case DELETE_SUCCESS: {
            return {
                ...state,
                message: 'Offer deleted successfully!',
            };
        }
        default: {
            return state;
        }
    }
}
