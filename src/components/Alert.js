import React, { PropTypes } from 'react';
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
