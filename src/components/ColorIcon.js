import colorIcon from '../img/color-icon.png';
import bwIcon from '../img/bw-icon.png';

import React, { PropTypes } from 'react';

const ColorIcon = ({ isColor }) => {
  if (isColor) {
    return (
      <img
        className="ListingTile__icon"
        title="This poster is to be printed in color"
        alt="color icon"
        src={colorIcon}
      />
    );
  }
  return (
    <img
      className="ListingTile__icon"
      title="This poster is to be printed in black and white"
      alt="black and white icon"
      src={bwIcon}
    />
  );
};

ColorIcon.propTypes = {
  isColor: PropTypes.bool.isRequired,
};

export default ColorIcon
