import React, { PropTypes } from 'react';
import '../styles/ListingTile.css';
import ColorIcon from './ColorIcon';
import ListingThumbnail from './ListingThumbnail';

export default class ListingTile extends React.Component {
  static propTypes = {
    listing: PropTypes.object.isRequired
  };
  render() {
    const { listing } = this.props;
    return (
      <div className="ListingTile">
        <div className="ListingTile__content">
          <div className="ListingTile__headline">
            <p className="ListingTile__title overflow-ellipsis">
              {listing.title}
            </p>
            <ColorIcon isColor={listing.isColor} />
          </div>
        </div>
        <ListingThumbnail
          title={listing.title}
          thumbnailId={listing.thumbnailId}
        />
      </div>
    );
  }
}
