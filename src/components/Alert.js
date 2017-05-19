import PropTypes from 'prop-types';
import React from 'react';
import '../styles/Alert.css';

const Alert = ({ children, type }) => (
  <div className={`Alert Alert--${type}`}>
    { children }
  </div>
);

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
