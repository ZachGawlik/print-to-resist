import {
  SET_COLOR_FILTER,
  SET_TAG_FILTER,
  TOGGLE_ACTIVE_ONLY
} from '../actions/galleryActions';

const initialState = {
  activeOnly: false,
  colorOption: '',
  tag: null
};

function galleryFilters(state = initialState, action) {
  switch (action.type) {
    case SET_COLOR_FILTER:
      return {
        ...state,
        colorOption: action.payload
      };
    case SET_TAG_FILTER:
      return {
        ...state,
        tag: action.payload
      };
    case TOGGLE_ACTIVE_ONLY:
      return {
        ...state,
        activeOnly: !state.activeOnly
      };
    default:
      return state;
  }
}

export default galleryFilters;
