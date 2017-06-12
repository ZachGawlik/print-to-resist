import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Gallery from '../components/Gallery';
import * as actionCreators from '../actions/galleryActions';
import { COLOR_OPTIONS } from '../constants';

const isColorCompliant = (colorOption, listing) => {
  return !colorOption ||
    listing.isColor === (colorOption === COLOR_OPTIONS.color);
}

const includesFilterTag = (tagFilter, listing) => {
  return !tagFilter || listing.tags.includes(tagFilter);
}

const isActiveProject = (activeOnly, listing) => {
  return !activeOnly || !listing.deadline ||
    Date.parse(listing.deadline) > Date.now();
}

const getVisibleListings = (allIds, entities, filters) => {
  let allListings = allIds.map(listingId => entities[listingId]);

  return allListings.filter(listing =>
    isColorCompliant(filters.colorOption, listing) &&
    includesFilterTag(filters.tag, listing) &&
    isActiveProject(filters.activeOnly, listing)
  );
}

const mapStateToProps = (state) => ({
  galleryFilters: state.galleryFilters,
  listings: getVisibleListings(
    state.listings.allIds,
    state.listings.entities,
    state.galleryFilters
  ),
  status: state.listings.status
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  actionCreators,
  dispatch
);

const GalleryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);

export default GalleryContainer;
