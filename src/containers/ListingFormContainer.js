import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Alert from '../components/Alert';
import ListingForm from '../components/ListingForm';
import * as actionCreators from '../actions/listingFormActions';
import {
  COLOR_OPTIONS,
  PAPER_SIZES,
  STATUS
} from '../constants';
import '../styles/ListingForm.css';

class ListingFormContainer extends React.Component {
  static propTypes = {
    postListing: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      deadline: null,
      description: '',
      instruction:'',
      isColor: false,
      links: [],
      paperSize: PAPER_SIZES.letter,
      poster: null,
      tags: [],
      title: '',
      thumbnail: null
    };
  }

  handleDateChange = (newDate) => {
    this.setState({
      deadline: newDate
    });
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleThumbnailChange = (acceptedFiles) => {
    this.setState({
      thumbnail: acceptedFiles[0]
    });
  }

  handlePosterChange = (acceptedFiles) => {
    this.setState({
      poster: acceptedFiles[0]
    });
  }

  handleColorInput = (event) => {
    this.setState({
      isColor: event.target.value === COLOR_OPTIONS.color
    });
  }

  handleTagAddition = (tag) => {
    this.setState({
      tags: [
        ...this.state.tags,
        {
          id: tag,
          text: tag
        }
      ]
    });
  }

  handleTagDelete = (index) => {
    this.setState({
      tags: [
        ...this.state.tags.slice(0, index),
        ...this.state.tags.slice(index + 1)
      ]
    });
  }

  handleAddLink = () => {
    this.setState({
      links: [
        ...this.state.links,
        ''
      ]
    });
  }

  handleUrlChange = (index, url) => {
    this.setState({
      links: [
        ...this.state.links.slice(0, index),
        url,
        ...this.state.links.slice(index + 1)
      ]
    });
  }

  handleDeleteLink = (index) => {
    this.setState({
      links: [
        ...this.state.links.slice(0, index),
        ...this.state.links.slice(index + 1)
      ]
    });
  }

  render() {
    const { postListing, status } = this.props;
    if (status === STATUS.SUCCESS) {
      return (
        <Alert type="success">
          Your poster {this.state.title} has been submitted for approval!
          Assuming it is approved, you can expect to see it in the gallery within 48 hours for people around the country to start spreading.
        </Alert>
      );
    }
    return (
      <div className="ListingForm">
        {status === STATUS.FAILURE &&
          <Alert type="error">
            An error has occurred with your submission
          </Alert>
        }
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
          postListing={postListing}
        />
        {status === STATUS.PENDING &&
          <p>Submitting...</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.listingFormStatus
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  actionCreators,
  dispatch
);

const ConnectedListingFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListingFormContainer);

export default ConnectedListingFormContainer;
