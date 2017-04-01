import React, { PropTypes } from 'react';
import ListingTile from './ListingTile';
import '../styles/Gallery.css';

export default class Gallery extends React.Component {
  static propTypes = {
    getListings: PropTypes.func.isRequired,
    listings: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getListings();
  }

  render() {
    return (
      <div className="Gallery" id="gallery">
        <h2>Spread the word!</h2>
        <p>Select a page to post around your city</p>
        <div className="Gallery__tiles">
          {this.props.listings.map(listing => (
            <ListingTile key={listing.listingId} listing={listing} />
          ))}
        </div>
      </div>
    );
  }
}
