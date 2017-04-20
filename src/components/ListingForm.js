import React, { PropTypes } from 'react';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { WithContext as ReactTags } from 'react-tag-input'
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
        <div className="field">
          <label htmlFor="thumbnail-input">
            Thumbnail:
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
              inputProps={{id: 'thumbnail-input'}}
              onDropAccepted={this.props.handleThumbnailChange}
            >
              Add your thumbnail
            </Dropzone>
          </div>
        </div>
        <div className="field">
          <label htmlFor="title-input">
            Title:
          </label>
          <input
            id="title-input"
            name="title"
            type="text"
            onChange={this.props.handleInputChange}
          />
        </div>
        <div className="field">
          <label htmlFor="poster-input">
            Poster:
          </label>
          {listing.poster &&
            listing.poster.name}
          <Dropzone
            accept="image/jpeg, image/png, application/pdf"
            disablePreview={true}
            inputProps={{id: 'poster-input'}}
            onDropAccepted={this.props.handlePosterChange}
          >
            Add your Poster.
          </Dropzone>
        </div>
        <div className="field">
          <label htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            onChange={this.props.handleInputChange}
            value={listing.description}
          />
        </div>
        <div className="field">
          <label htmlFor="instruction">
            Special instruction:
          </label>
          <textarea
            name="instruction"
            onChange={this.props.handleInputChange}
            value={listing.instruction}
          />
        </div>
        <div className="field">
          <label htmlFor="tags">
            Tags
          </label>
          <ReactTags
            autofocus={false}
            classNames={{
              tagInput: listing.tags.length >= 3 ? 'display-none' : 'ReactTags__tagInput'
            }}
            handleAddition={this.props.handleTagAddition}
            handleDelete={this.props.handleTagDelete}
            minQueryLength={1}
            name="tags"
            tags={listing.tags}
          />
        </div>
        <div className="field">
          <label>
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
            className="ListingForm__add-link"
            onClick={this.props.handleAddLink}
            type="button"
          >
            +
          </button>
        </div>
        <div className="field">
          <label>Deadline</label>
          <DatePicker
            isClearable={true}
            minDate={moment()}
            maxDate={moment().add(1, "year")}
            onChange={this.props.handleDateChange}
            placeholderText="deadline"
            selected={listing.deadline}
          />
        </div>
        <div className="field">
          <p>Print in:</p>
          <label>
            <input
              type="radio"
              name="isColor"
              value={COLOR_OPTIONS.bw}
              checked={!listing.isColor}
              onChange={this.props.handleColorInput}
            />
            B/W
          </label>
          <label>
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
        <div className="field">
          <p>Page size</p>
          <label>
            <input
              type="radio"
              name="paperSize"
              value={PAPER_SIZES.letter}
              checked={listing.paperSize === PAPER_SIZES.letter}
              onChange={this.props.handleInputChange}
            />Letter
          </label>
          <label>
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
