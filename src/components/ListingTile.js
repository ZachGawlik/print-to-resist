import PropTypes from 'prop-types';
import React from 'react';
import '../styles/ListingTile.css';
import ListingLink from './ListingLink';
import Tag from './Tag';
import { getShortDate } from '../utils';
import { BASE_URL } from '../constants';

const ListingTile = ({
  deadline,
  isLocalImage = false,
  listingId,
  setTagFilter,
  tags,
  thumbnailId,
  title
}) =>
  <div className="ListingTile">
    <div className="ListingTile__content">
      <div className="ListingTile__headline">
        <p className="ListingTile__title overflow-ellipsis">
          {listingId
            ? <ListingLink listingId={listingId}>{title}</ListingLink>
            : title}
        </p>
        <p className="ListingTile__deadline">
          {deadline && getShortDate(deadline)}
        </p>
      </div>
      <div className="overflow-ellipsis">
        {tags.length
          ? tags.map(tag => <Tag key={tag} name={tag} onClick={setTagFilter} />)
          : <span className="ListingTile__tag--placeholder">no tags</span>}
      </div>
    </div>
    <div className="ListingTile__image-wrapper">
      <img
        alt=""
        className="ListingTile__image"
        src={isLocalImage ? thumbnailId : `${BASE_URL}/image/${thumbnailId}`}
      />
    </div>
  </div>;

ListingTile.propTypes = {
  deadline: PropTypes.string,
  isLocalImage: PropTypes.bool,
  listingId: PropTypes.number,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  thumbnailId: PropTypes.string.isRequired,
  setTagFilter: PropTypes.func
};

export default ListingTile;
