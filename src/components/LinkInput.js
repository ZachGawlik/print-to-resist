import React, { PropTypes } from 'react';

export default class LinkInput extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    onDeleteLink: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
  };

  handleUrlChange = (event) => {
    this.props.onUrlChange(this.props.index, event.target.value);
  }

  handleDeleteClick = () => {
    this.props.onDeleteLink(this.props.index)
  }

  render() {
    return (
      <div>
        <input
          type="url"
          onChange={this.handleUrlChange}
          value={this.props.url}
        />
        <button type="button" onClick={this.handleDeleteClick}>
          -
        </button>
      </div>
    );
  }
}
