import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import listings from './listings'
import listingFormStatus from './listingFormStatus';

const rootReducer = combineReducers({
  listings,
  listingFormStatus,
  router: routerReducer
});

export default rootReducer;
