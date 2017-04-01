import React, { PropTypes } from 'react';
import { BASE_URL } from '../constants';
import '../styles/ListingTile.css';

export default class ListingTile extends React.Component {
  static propTypes = {
    listing: PropTypes.object.isRequired
  };
  render() {
    const { listing } = this.props;
    return (
      <div className="ListingTile">
        <div className="ListingTile__thumbnail_container">
          <img
            alt=""
            className="ListingTile__thumbnail"
            src={`${BASE_URL}/image/${listing.thumbnail_id}`}
          />
        </div>
        <div className="ListingTile__content">
          <p className="ListingTile__title">
            {listing.title}
          </p>
        </div>
      </div>
    );
  }
}
