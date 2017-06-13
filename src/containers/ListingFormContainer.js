import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from '../components/Alert';
import ListingForm from '../components/ListingForm';
import ListingTile from '../components/ListingTile';
import * as actionCreators from '../actions/listingFormActions';
import { COLOR_OPTIONS, PAPER_SIZES, STATUS } from '../constants';
import '../styles/ListingForm.css';

class ListingFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: null,
      description: '',
      instruction: '',
      isColor: false,
      links: [],
      paperSize: PAPER_SIZES.letter,
      poster: null,
      tags: [],
      title: '',
      thumbnail: null
    };
  }

  handleDateChange = newDate => {
    this.setState({
      deadline: newDate
    });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleThumbnailChange = acceptedFiles => {
    this.setState({
      thumbnail: acceptedFiles[0]
    });
  };

  handlePosterChange = acceptedFiles => {
    this.setState({
      poster: acceptedFiles[0]
    });
  };

  handleColorInput = event => {
    this.setState({
      isColor: event.target.value === COLOR_OPTIONS.color
    });
  };

  handleTagAddition = tag => {
    this.setState({
      tags: [
        ...this.state.tags,
        {
          id: tag,
          text: tag
        }
      ]
    });
  };

  handleTagDelete = index => {
    this.setState({
      tags: [
        ...this.state.tags.slice(0, index),
        ...this.state.tags.slice(index + 1)
      ]
    });
  };

  handleAddLink = () => {
    this.setState({
      links: [...this.state.links, '']
    });
  };

  handleUrlChange = (index, url) => {
    this.setState({
      links: [
        ...this.state.links.slice(0, index),
        url,
        ...this.state.links.slice(index + 1)
      ]
    });
  };

  handleDeleteLink = index => {
    this.setState({
      links: [
        ...this.state.links.slice(0, index),
        ...this.state.links.slice(index + 1)
      ]
    });
  };

  isValid = () =>
    !!this.state.description &&
    !!this.state.poster &&
    !!this.state.title &&
    !!this.state.thumbnail;

  handleSubmit = event => {
    const data = new FormData();
    Object.keys(this.state).forEach(field => {
      if (field === 'tags') {
        this.state.tags.forEach(tag => {
          data.append(field, tag.id);
        });
      } else if (field === 'links') {
        this.state.links.forEach(link => {
          data.append(field, link);
        });
      } else {
        data.append(field, this.state[field]);
      }
    });

    if (this.isValid()) {
      this.props.postListing(data);
    }
    event.preventDefault();
  };

  render() {
    const { status } = this.props;
    if (status === STATUS.SUCCESS) {
      return (
        <Alert type="success">
          Your poster {this.state.title} has been submitted for approval!
          Assuming it is approved, you can expect to see it in the gallery
          within 48 hours for people around the country to start spreading.
        </Alert>
      );
    }
    return (
      <div className="ListingForm">
        {status === STATUS.FAILURE &&
          <Alert type="error">
            An error has occurred with your submission
          </Alert>}
        <ListingForm
          handleAddLink={this.handleAddLink}
          handleColorInput={this.handleColorInput}
          handleDateChange={this.handleDateChange}
          handleDeleteLink={this.handleDeleteLink}
          handleInputChange={this.handleInputChange}
          handlePosterChange={this.handlePosterChange}
          handleTagAddition={this.handleTagAddition}
          handleTagDelete={this.handleTagDelete}
          handleThumbnailChange={this.handleThumbnailChange}
          handleUrlChange={this.handleUrlChange}
          listing={this.state}
        />
        {this.state.thumbnail &&
          <div className="ListingForm__preview">
            <p className="ListingForm__preview-label">Preview</p>
            <ListingTile
              deadline={this.state.deadline && this.state.deadline.format()}
              isLocalImage={true}
              tags={this.state.tags.map(tag => tag.text)}
              thumbnailId={this.state.thumbnail && this.state.thumbnail.preview}
              title={this.state.title || 'Example'}
            />
          </div>}
        <button onClick={this.handleSubmit} disabled={!this.isValid()}>
          Submit
        </button>
        {status === STATUS.PENDING && <p>Submitting...</p>}
      </div>
    );
  }
}

ListingFormContainer.propTypes = {
  postListing: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  status: state.listingFormStatus
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

const ConnectedListingFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingFormContainer);

export default ConnectedListingFormContainer;
