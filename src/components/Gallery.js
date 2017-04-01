import React, { PropTypes } from 'react';
import '../styles/Gallery.css';
import ListingTile from './ListingTile';

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
      <div className="Gallery">
        {this.props.listings.map(listing => (
          <ListingTile key={listing.listing_id} listing={listing} />
        ))}
      </div>
    );
  }
}
