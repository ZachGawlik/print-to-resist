import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Gallery from '../components/Gallery';
import * as actionCreators from '../actions/galleryActions';

const mapStateToProps = (state) => ({
  listings: state.listings.visibleListings.map(
    listingId => state.listings.entities[listingId]
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
