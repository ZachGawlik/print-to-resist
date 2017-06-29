import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import { BASE_URL } from '../../src/constants';
import {
  getListing,
  GET_LISTING_FAILURE,
  GET_LISTING_REQUEST,
  GET_LISTING_SUCCESS
} from '../../src/actions/listingDetailActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('galleryActions async actions', () => {
  afterEach(nock.cleanAll);

  it('getListing fires necessary actions on success', () => {
    nock(`${BASE_URL}/`).get('/api/listings/5').reply(200, { body: {} });

    const store = mockStore({});
    const expectedActions = [GET_LISTING_REQUEST, GET_LISTING_SUCCESS];

    return store.dispatch(getListing(5)).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it('getListing fires necessary actions on failure', () => {
    nock(`${BASE_URL}/`).get('/api/listings/5').reply(404);

    const store = mockStore({});
    const expectedActions = [GET_LISTING_REQUEST, GET_LISTING_FAILURE];

    return store.dispatch(getListing(5)).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
