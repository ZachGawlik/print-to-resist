import {
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS,
  GET_LISTINGS_FAILURE
} from '../actions/galleryActions';
import { STATUS } from '../constants';

function listingsStatus(state = STATUS.UNINITIALIZED, action) {
  switch (action.type) {
    case GET_LISTINGS_REQUEST:
      return STATUS.PENDING;
    case GET_LISTINGS_SUCCESS:
      return STATUS.SUCCESS;
    case GET_LISTINGS_FAILURE:
      return STATUS.FAILURE;
    default:
      return state;
  }
}

export default listingsStatus;
