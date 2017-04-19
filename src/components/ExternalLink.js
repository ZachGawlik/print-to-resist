import React, { PropTypes } from 'react';

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
