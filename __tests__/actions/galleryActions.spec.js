import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import { BASE_URL } from '../../src/constants';
import {
  getListings,
  GET_LISTINGS_FAILURE,
  GET_LISTINGS_REQUEST,
  GET_LISTINGS_SUCCESS
} from '../../src/actions/galleryActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('galleryActions async actions', () => {
  afterEach(nock.cleanAll);

  it('getListings fires necessary actions on success', () => {
    nock(`${BASE_URL}/`).get('/api/listings').reply(200, { body: {} });

    const store = mockStore({});
    const expectedActions = [GET_LISTINGS_REQUEST, GET_LISTINGS_SUCCESS];

    return store.dispatch(getListings()).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it('getListings fires necessary actions on failure', () => {
    nock(`${BASE_URL}/`).get('/api/listings').reply(404);

    const store = mockStore({});
    const expectedActions = [GET_LISTINGS_REQUEST, GET_LISTINGS_FAILURE];

    return store.dispatch(getListings()).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
