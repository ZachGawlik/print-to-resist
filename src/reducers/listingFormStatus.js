import {
  POST_LISTING_REQUEST,
  POST_LISTING_SUCCESS,
  POST_LISTING_FAILURE
} from '../actions/listingFormActions.js';
import { STATUS } from '../constants';

function listingFormStatus(state = STATUS.UNINITIALIZED, action) {
  switch (action.type) {
    case POST_LISTING_REQUEST:
      return STATUS.PENDING
    case POST_LISTING_SUCCESS:
      return STATUS.SUCCESS
    case POST_LISTING_FAILURE:
      return STATUS.FAILURE
    default:
      return state;
  }
}

export default listingFormStatus;
