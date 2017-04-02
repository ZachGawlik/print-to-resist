import React, { PropTypes } from 'react';
import { BASE_URL } from '../constants';
import '../styles/ListingTile.css';
import ColorIcon from './ColorIcon';

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
            src={`${BASE_URL}/image/${listing.thumbnailId}`}
          />
        </div>
        <div className="ListingTile__content">
          <p className="ListingTile__title">
            {listing.title}
          </p>
          <ColorIcon isColor={listing.isColor} />
        </div>
      </div>
    );
  }
}
