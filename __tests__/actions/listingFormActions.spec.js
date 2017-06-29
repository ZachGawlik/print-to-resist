import configureMockStore from 'redux-mock-store';
import nock from 'nock';
import thunk from 'redux-thunk';
import { BASE_URL } from '../../src/constants';
import {
  postListing,
  POST_LISTING_FAILURE,
  POST_LISTING_REQUEST,
  POST_LISTING_SUCCESS
} from '../../src/actions/listingFormActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('galleryActions async actions', () => {
  afterEach(nock.cleanAll);

  it('postListing fires necessary actions on success', () => {
    nock(`${BASE_URL}/`).post('/api/listings').reply(200, { body: {} });

    const store = mockStore({});
    const expectedActions = [POST_LISTING_REQUEST, POST_LISTING_SUCCESS];

    return store.dispatch(postListing({ title: 'Test Listing' })).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  it('postListing fires necessary actions on failure', () => {
    nock(`${BASE_URL}/`).post('/api/listings').reply(404);

    const store = mockStore({});
    const expectedActions = [POST_LISTING_REQUEST, POST_LISTING_FAILURE];

    return store.dispatch(postListing({ title: 'Test Listing' })).then(() => {
      const actualActions = store.getActions().map(action => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
