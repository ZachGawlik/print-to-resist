import React, { PropTypes } from 'react';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { WithContext as ReactTags } from 'react-tag-input';
import LinkInput from './LinkInput';
import {
  COLOR_OPTIONS,
  PAPER_SIZES
} from '../constants';
import '../styles/ReactTags.css'

class ListingForm extends React.Component {
  static propTypes = {
    handleAddLink: PropTypes.func.isRequired,
    handleColorInput: PropTypes.func.isRequired,
    handleDateChange: PropTypes.func.isRequired,
    handleDeleteLink: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handlePosterChange: PropTypes.func.isRequired,
    handleTagAddition: PropTypes.func.isRequired,
    handleTagDelete: PropTypes.func.isRequired,
    handleThumbnailChange: PropTypes.func.isRequired,
    handleUrlChange: PropTypes.func.isRequired,
    listing: PropTypes.object.isRequired,
    postListing: PropTypes.func.isRequired
  }

  isValid = () => {
    const { listing } = this.props;
    return (
      !!listing.description &&
      !!listing.poster &&
      !!listing.title &&
      !!listing.thumbnail
    );
  }

  handleSubmit = (event) => {
    const { listing } = this.props;
    const data = new FormData();
    Object.keys(listing).forEach((field) => {
      if (field === 'tags') {
        listing.tags.forEach(tag => {
          data.append(field, tag.id);
        })
      } else if (field === 'links') {
        listing.links.forEach(link => {
          data.append(field, link)
        });
      } else {
        data.append(field, listing[field]);
      }
    })

    if (this.isValid()) {
      this.props.postListing(data);
    }
    event.preventDefault();
  }

  render() {
    const { listing } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ListingForm__field">
          <label
            className="ListingForm__field-label"
            htmlFor="thumbnail-input"
          >
            Thumbnail:
            <span className="ListingForm__input-info">(must be less than 10MB)</span>
          </label>
          <div>
            {listing.thumbnail &&
              <img
                alt="thumbnail"
                className="ListingForm__preview"
                src={listing.thumbnail.preview}
              />
            }
            <Dropzone
              accept="image/jpeg, image/png"
              className="ListingForm__dropzone"
              inputProps={{id: 'thumbnail-input'}}
              multiple={false}
              onDropAccepted={this.props.handleThumbnailChange}
            >
              Add your thumbnail
            </Dropzone>
          </div>
        </div>
        <div className="ListingForm__field">
          <label
            className="ListingForm__field-label"
            htmlFor="title-input"
          >
            Title:
          </label>
          <input
            id="title-input"
            name="title"
            type="text"
            onChange={this.props.handleInputChange}
          />
        </div>
        <div className="ListingForm__field">
          <label
            className="ListingForm__field-label"
            htmlFor="poster-input"
          >
            Poster:
            <span className="ListingForm__input-info">(must be less than 10MB)</span>
          </label>
          {listing.poster &&
            listing.poster.name}
          <Dropzone
            accept="image/jpeg, image/png, application/pdf"
            className="ListingForm__dropzone"
            disablePreview={true}
            inputProps={{id: 'poster-input'}}
            multiple={false}
            onDropAccepted={this.props.handlePosterChange}
          >
            Add your poster
          </Dropzone>
        </div>
        <div className="ListingForm__field">
          <label
            className="ListingForm__field-label"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            onChange={this.props.handleInputChange}
            value={listing.description}
          />
        </div>
        <div className="ListingForm__field">
          <label
            className="ListingForm__field-label"
            htmlFor="instruction"
          >
            Special instruction:
            <span className="ListingForm__input-info">Where/how should this be spread?</span>
          </label>
          <textarea
            id="instruction"
            name="instruction"
            onChange={this.props.handleInputChange}
            value={listing.instruction}
          />
        </div>
        <div className="ListingForm__field">
          <label
            className="ListingForm__field-label"
            htmlFor="tags"
          >
            Tags
            <span className="ListingForm__input-info">(up to 3)</span>
          </label>
          <ReactTags
            autofocus={false}
            classNames={{
              tagInput: listing.tags.length >= 3 ? 'display-none' : 'ReactTags__tagInput'
            }}
            handleAddition={this.props.handleTagAddition}
            handleDelete={this.props.handleTagDelete}
            id="tags"
            minQueryLength={1}
            name="tags"
            tags={listing.tags}
          />
        </div>
        <div className="ListingForm__field">
          <label className="ListingForm__field-label">
            Links
          </label>
          {listing.links.map((link, index) =>
            <LinkInput
              key={index}
              index={index}
              onDeleteLink={this.props.handleDeleteLink}
              onUrlChange={this.props.handleUrlChange}
              url={link}
            />
          )}
          <button
            onClick={this.props.handleAddLink}
            type="button"
          >
            Add +
          </button>
        </div>
        <div className="ListingForm__field">
          <label
            className="ListingForm__field-label"
            htmlFor="deadline"
          >
            Deadline
          </label>
          <DatePicker
            isClearable={true}
            minDate={moment()}
            maxDate={moment().add(1, "year")}
            onChange={this.props.handleDateChange}
            placeholderText="No deadline selected"
            selected={listing.deadline}
          />
        </div>
        <div className="ListingForm__field">
          <p className="ListingForm__field-label">Print in:</p>
          <label className="ListingForm__radio-label">
            <input
              type="radio"
              name="isColor"
              value={COLOR_OPTIONS.bw}
              checked={!listing.isColor}
              onChange={this.props.handleColorInput}
            />
            B/W
          </label>
          <label className="ListingForm__radio-label">
            <input
              type="radio"
              name="isColor"
              value={COLOR_OPTIONS.color}
              checked={!!listing.isColor}
              onChange={this.props.handleColorInput}
            />
            <span className="colorful">Color</span>
          </label>
        </div>
        <div className="ListingForm__field">
          <p className="ListingForm__field-label">Page size</p>
          <label className="ListingForm__radio-label">
            <input
              type="radio"
              name="paperSize"
              value={PAPER_SIZES.letter}
              checked={listing.paperSize === PAPER_SIZES.letter}
              onChange={this.props.handleInputChange}
            />Letter
          </label>
          <label className="ListingForm__radio-label">
            <input
              type="radio"
              name="paperSize"
              value={PAPER_SIZES.tabloid}
              checked={listing.paperSize === PAPER_SIZES.tabloid}
              onChange={this.props.handleInputChange}
            />Tabloid (17 x 11)
          </label>
        </div>
        <input type="submit" value="Submit" disabled={!this.isValid()} />
      </form>
    );
  }
}

export default ListingForm;
