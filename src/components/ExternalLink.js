import PropTypes from 'prop-types';
import React from 'react';

const ExternalLink = ({ url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {url}
  </a>
);

ExternalLink.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ExternalLink;
