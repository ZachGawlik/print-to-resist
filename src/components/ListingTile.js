import React, { PropTypes } from 'react';
import { BASE_URL } from '../constants';
import '../styles/ListingTile.css';
import colorIcon from '../img/color-icon.png';
import bwIcon from '../img/bw-icon.png';

export default class ListingTile extends React.Component {
  static propTypes = {
    listing: PropTypes.object.isRequired
  };
  render() {
    const { listing } = this.props;
    console.log(listing);
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
          {listing.isColor ?
            <img
              className="ListingTile__icon"
              title="This poster is to be printed in color"
              alt="color icon"
              src={colorIcon}
            /> :
            <img
              className="ListingTile__icon"
              title="This poster is to be printed in black and white"
              alt="black and white icon"
              src={bwIcon}
            />
          }
        </div>
      </div>
    );
  }
}
