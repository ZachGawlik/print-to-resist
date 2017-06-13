import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import galleryFilters from './galleryFilters';
import listings from './listings';
import listingFormStatus from './listingFormStatus';

const rootReducer = combineReducers({
  galleryFilters,
  listings,
  listingFormStatus,
  router: routerReducer
});

export default rootReducer;
