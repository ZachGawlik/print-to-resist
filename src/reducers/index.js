import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import listingFormStatus from './listingFormStatus';

const rootReducer = combineReducers({
  listingFormStatus,
  router: routerReducer
});

export default rootReducer;
