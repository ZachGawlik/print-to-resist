import { API_ROOT } from '../constants';
import { checkStatus } from '../utils';

export const GET_LISTINGS_REQUEST = 'GET_LISTINGS_REQUEST';
export const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS';
export const GET_LISTINGS_FAILURE = 'GET_LISTINGS_FAILURE';

const getListingsRequest = () => ({
  type: GET_LISTINGS_REQUEST
});

const getListingsSuccess = (listings) => ({
  type: GET_LISTINGS_SUCCESS,
  listings
});

const getListingsFailure = () => ({
  type: GET_LISTINGS_FAILURE
})

export function getListings(formData) {
  return (dispatch) => {
    dispatch(getListingsRequest());
    return fetch(`${API_ROOT}/listing`)
    .then(checkStatus)
    .then(data => {
      dispatch(getListingsSuccess(data));
    })
    .catch(err => {
      dispatch(getListingsFailure());
      console.log(err);
    });
  }
}
