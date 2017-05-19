import PropTypes from 'prop-types';
import React from 'react';
import ListingTile from './ListingTile';
import '../styles/Gallery.css';

class Gallery extends React.Component {
  componentDidMount() {
    this.props.getListings();
  }

  render() {
    const { listings } = this.props;
    return (
      <div className="Gallery" id="gallery">
        <h2>Spread the word!</h2>
        <p>Select a page to post around your city</p>
        <div>
          {listings.map(listing => (
            <div className="Gallery__tile" key={listing.listingId}>
              <ListingTile listing={listing} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  getListings: PropTypes.func.isRequired,
  listings: PropTypes.array.isRequired
};

export default Gallery;
