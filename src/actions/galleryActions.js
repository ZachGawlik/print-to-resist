import { API_ROOT } from '../constants';
import { checkStatus } from '../utils';

export const GET_LISTINGS_REQUEST = 'GET_LISTINGS_REQUEST';
export const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS';
export const GET_LISTINGS_FAILURE = 'GET_LISTINGS_FAILURE';

const getListingsRequest = () => ({
  type: GET_LISTINGS_REQUEST
});

const getListingsSuccess = (payload) => ({
  type: GET_LISTINGS_SUCCESS,
  payload
});

const getListingsFailure = () => ({
  type: GET_LISTINGS_FAILURE
})

export function getListings() {
  return (dispatch) => {
    dispatch(getListingsRequest());
    return fetch(`${API_ROOT}/listings`)
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