import PropTypes from 'prop-types';
import React from 'react';
import { BASE_URL } from '../constants';
import '../styles/ListingThumbnail.css';

const ListingThumbnail = ({ title, thumbnailId }) =>
  <div className="ListingThumbnail">
    <img
      alt={`Thumbnail for ${title}`}
      className="ListingThumbnail__image"
      src={`${BASE_URL}/image/${thumbnailId}`}
    />
  </div>;

ListingThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnailId: PropTypes.string.isRequired
};

export default ListingThumbnail;
