import PropTypes from 'prop-types';
import React from 'react';
import '../styles/ListingTile.css';
import ListingLink from './ListingLink';
import ListingThumbnail from './ListingThumbnail';
import Tag from './Tag';
import { getShortDate } from '../utils';

const ListingTile = ({ listing, setTagFilter }) =>
  <div className="ListingTile">
    <div className="ListingTile__card">
      <div className="ListingTile__content">
        <div className="ListingTile__headline">
          <p className="ListingTile__title overflow-ellipsis">
            <ListingLink listingId={listing.listingId}>
              {listing.title}
            </ListingLink>
          </p>
          <p className="ListingTile__deadline">
            {listing.deadline && getShortDate(listing.deadline)}
          </p>
        </div>
        <div className="overflow-ellipsis">
          {listing.tags.length
            ? listing.tags.map(tag =>
                <Tag key={tag} name={tag} onClick={setTagFilter} />
              )
            : <span className="ListingTile__tag--placeholder">
                no tags
              </span>}
        </div>
      </div>
      <ListingLink listingId={listing.listingId}>
        <ListingThumbnail
          title={listing.title}
          thumbnailId={listing.thumbnailId}
        />
      </ListingLink>
    </div>
  </div>;

ListingTile.propTypes = {
  listing: PropTypes.object.isRequired,
  setTagFilter: PropTypes.func
};

export default ListingTile;
