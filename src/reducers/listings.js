import { normalize } from 'normalizr';
import {
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAILURE
} from '../actions/galleryActions.js';
import { listingsSchema } from '../schema';
import { STATUS } from '../constants';
import listingsStatus from './listingsStatus';

const initialState = {
  status: STATUS.UNINITIALIZED,
  entities: {},
  visibleListings: []
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
      const normalizedData = normalize(action.payload, listingsSchema);
      return {
        status: listingsStatus(state.status, action),
        entities: {
          ...state.entities,
          ...normalizedData.entities.listings
        },
        visibleListings: normalizedData.result
      };
    default:
      return state;
  }
}

export default listings;
