import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const ListingLink = ({ children, listingId }) =>
  <Link className="ListingLink" to={`/poster/${listingId}`}>
    {children}
  </Link>;

ListingLink.propTypes = {
  children: PropTypes.node.isRequired,
  listingId: PropTypes.number.isRequired
};

export default ListingLink;
