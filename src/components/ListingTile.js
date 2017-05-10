import React, { PropTypes } from 'react';
import '../styles/ListingTile.css';
import ColorIcon from './ColorIcon';
import ListingLink from './ListingLink';
import ListingThumbnail from './ListingThumbnail';

export default class ListingTile extends React.Component {
  static propTypes = {
    listing: PropTypes.object.isRequired
  };
  render() {
    const { listing } = this.props;
    return (
      <div className="ListingTile">
        <div className="ListingTile__card">
          <div className="ListingTile__content">
            <div className="ListingTile__headline">
              <p className="ListingTile__title overflow-ellipsis">
                <ListingLink listingId={listing.listingId}>
                  {listing.title}
                </ListingLink>
              </p>
              <ColorIcon isColor={listing.isColor} />
            </div>
            <div className="overflow-ellipsis">
              {listing.tags.length ?
                listing.tags.map(tag => (
                  <span className="ListingTile__tag" key={tag}>#{tag}</span>
                )) :
                <span className="ListingTile__tag--placeholder">no tags</span>
              }
            </div>
          </div>
          <ListingLink listingId={listing.listingId}>
            <ListingThumbnail
              title={listing.title}
              thumbnailId={listing.thumbnailId}
            />
          </ListingLink>
        </div>
      </div>
    );
  }
}
