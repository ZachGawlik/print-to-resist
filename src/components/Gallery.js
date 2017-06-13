import PropTypes from 'prop-types';
import React from 'react';
import FilterBar from './FilterBar';
import ListingTile from './ListingTile';
import '../styles/Gallery.css';

class Gallery extends React.Component {
  componentDidMount() {
    if (!this.props.listings.length) {
      this.props.getListings();
    }
  }

  render() {
    const {
      listings,
      galleryFilters,
      setColorFilter,
      setTagFilter,
      toggleActiveOnly
    } = this.props;
    return (
      <div className="Gallery" id="gallery">
        <h2>Spread the word!</h2>
        <p>Select a page to post around your city</p>
        <FilterBar
          galleryFilters={galleryFilters}
          setColorFilter={setColorFilter}
          setTagFilter={setTagFilter}
          toggleActiveOnly={toggleActiveOnly}
        />
        <div>
          {listings.map(listing =>
            <div className="Gallery__tile" key={listing.listingId}>
              <ListingTile listing={listing} setTagFilter={setTagFilter} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  galleryFilters: PropTypes.shape({
    colorOption: PropTypes.string.isRequired,
    activeOnly: PropTypes.bool.isRequired,
    tag: PropTypes.string
  }).isRequired,
  getListings: PropTypes.func.isRequired,
  listings: PropTypes.array.isRequired,
  setColorFilter: PropTypes.func.isRequired,
  setTagFilter: PropTypes.func.isRequired,
  toggleActiveOnly: PropTypes.func.isRequired
};

export default Gallery;
