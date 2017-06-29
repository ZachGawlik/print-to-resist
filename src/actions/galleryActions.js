import fetch from 'isomorphic-fetch';
import { API_ROOT } from '../constants';
import { checkStatus } from '../utils';

export const GET_LISTINGS_REQUEST = 'GET_LISTINGS_REQUEST';
export const GET_LISTINGS_SUCCESS = 'GET_LISTINGS_SUCCESS';
export const GET_LISTINGS_FAILURE = 'GET_LISTINGS_FAILURE';
export const SET_COLOR_FILTER = 'SET_COLOR_FILTER';
export const SET_TAG_FILTER = 'SET_TAG_FILTER';
export const TOGGLE_ACTIVE_ONLY = 'TOGGLE_ACTIVE_ONLY';

const getListingsRequest = () => ({
  type: GET_LISTINGS_REQUEST
});

const getListingsSuccess = payload => ({
  type: GET_LISTINGS_SUCCESS,
  payload
});

const getListingsFailure = () => ({
  type: GET_LISTINGS_FAILURE
});

export function getListings() {
  return dispatch => {
    dispatch(getListingsRequest());
    return fetch(`${API_ROOT}/listings`)
      .then(checkStatus)
      .then(data => {
        dispatch(getListingsSuccess(data));
      })
      .catch(() => {
        dispatch(getListingsFailure());
      });
  };
}

export const setColorFilter = colorOption => ({
  type: SET_COLOR_FILTER,
  payload: colorOption
});

export const setTagFilter = tag => ({
  type: SET_TAG_FILTER,
  payload: tag
});

export const toggleActiveOnly = () => ({
  type: TOGGLE_ACTIVE_ONLY
});
