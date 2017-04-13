import { API_ROOT } from '../constants';
import { checkStatus } from '../utils';

export const GET_LISTING_REQUEST = 'GET_LISTING_REQUEST';
export const GET_LISTING_SUCCESS = 'GET_LISTING_SUCCESS';
export const GET_LISTING_FAILURE = 'GET_LISTING_FAILURE';

const getListingRequest = () => ({
  type: GET_LISTING_REQUEST
});

const getListingSuccess = (payload) => ({
  type: GET_LISTING_SUCCESS,
  payload
});

const getListingFailure = () => ({
  type: GET_LISTING_FAILURE
})

export function getListing(listingId) {
  return (dispatch) => {
    dispatch(getListingRequest());
    return fetch(`${API_ROOT}/listing/${listingId}`)
    .then(checkStatus)
    .then(data => {
      dispatch(getListingSuccess(data));
    })
    .catch(err => {
      dispatch(getListingFailure());
    });
  }
}
