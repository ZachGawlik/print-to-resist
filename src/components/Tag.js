import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Tag.css';

class Tag extends React.Component {
  handleOnClick = () => {
    this.props.onClick(this.props.name);
  };

  render() {
    if (this.props.onClick) {
      return (
        <button className="Tag Tag--clickable" onClick={this.handleOnClick}>
          {this.props.name}
        </button>
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
