import fetch from 'isomorphic-fetch';
import { API_ROOT } from '../constants';
import { checkStatus } from '../utils';

export const POST_LISTING_REQUEST = 'POST_LISTING_REQUEST';
export const POST_LISTING_SUCCESS = 'POST_LISTING_SUCCESS';
export const POST_LISTING_FAILURE = 'POST_LISTING_FAILURE';

const postListingRequest = () => ({
  type: POST_LISTING_REQUEST
});

const postListingSuccess = () => ({
  type: POST_LISTING_SUCCESS
});

const postListingFailure = () => ({
  type: POST_LISTING_FAILURE
});

export function postListing(formData) {
  return dispatch => {
    dispatch(postListingRequest());
    return fetch(`${API_ROOT}/listings`, {
      method: 'POST',
      body: formData
    })
      .then(checkStatus)
      .then(() => {
        dispatch(postListingSuccess());
      })
      .catch(() => {
        dispatch(postListingFailure());
      });
  };
}
