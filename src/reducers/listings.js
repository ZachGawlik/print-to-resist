import {
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAILURE
} from '../actions/galleryActions.js';
import { STATUS } from '../constants';
import listingsStatus from './listingsStatus';

const initialState = {
  status: STATUS.UNINITIALIZED,
  results: []
};

function listings(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS_FAILURE:
    case GET_LISTINGS_REQUEST:
      return {
        ...state,
        status: listingsStatus(state.status, action)
      };
    case GET_LISTINGS_SUCCESS:
      return {
        status: listingsStatus(state.status, action),
        results: action.listings
      };
    default:
      return state;
  }
}

export default listings;
