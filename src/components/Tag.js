import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Tag.css';

class Tag extends React.Component {
  _onClick = () => {
    this.props.onClick(this.props.name);
  }

  render() {
    if (this.props.onClick) {
      return (
        <span className="Tag Tag--clickable" onClick={this._onClick}>
          {this.props.name}
        </span>
      );
    }
    return <span className="Tag">{this.props.name}</span>;
  }
}

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Tag;
