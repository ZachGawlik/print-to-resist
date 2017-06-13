import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { WithContext as ReactTags } from 'react-tag-input';
import LinkInput from './LinkInput';
import { COLOR_OPTIONS, PAPER_SIZES } from '../constants';
import '../styles/ReactTags.css';

const ListingForm = ({
  handleAddLink,
  handleColorInput,
  handleDateChange,
  handleDeleteLink,
  handleInputChange,
  handlePosterChange,
  handleTagAddition,
  handleTagDelete,
  handleThumbnailChange,
  handleUrlChange,
  listing
}) =>
  <div>
    <h2>Submit a poster worth spreading</h2>
    <p className="ListingForm__disclaimer">
      The submission will be reviewed to ensure the poster is accurate and
      relevant.
      If the poster pertains to a specific event, the organizer will be
      contacted to ensure that they agree to having the event be spread in
      this way.
    </p>
    <div className="ListingForm__field">
      <label className="ListingForm__field-label" htmlFor="thumbnail-input">
        Thumbnail:
        <span className="ListingForm__input-info">
          (preferably 300x300)
        </span>
      </label>
      <div>
        {listing.thumbnail &&
          <img
            alt="thumbnail"
            className="ListingForm__thumbnail"
            src={listing.thumbnail.preview}
          />}
        <Dropzone
          accept="image/jpeg, image/png"
          className="ListingForm__dropzone"
          inputProps={{ id: 'thumbnail-input' }}
          multiple={false}
          onDropAccepted={handleThumbnailChange}
        >
          Add your thumbnail
        </Dropzone>
      </div>
    </div>
    <div className="ListingForm__field">
      <label className="ListingForm__field-label" htmlFor="title-input">
        Title:
      </label>
      <input
        id="title-input"
        name="title"
        type="text"
        onChange={handleInputChange}
      />
    </div>
    <div className="ListingForm__field">
      <label className="ListingForm__field-label" htmlFor="poster-input">
        Poster:
        <span className="ListingForm__input-info">
          (must be less than 10MB)
        </span>
      </label>
      {listing.poster && listing.poster.name}
      <Dropzone
        accept="image/jpeg, image/png, application/pdf"
        className="ListingForm__dropzone"
        disablePreview={true}
        inputProps={{ id: 'poster-input' }}
        multiple={false}
        onDropAccepted={handlePosterChange}
      >
        Add your poster
      </Dropzone>
    </div>
    <div className="ListingForm__field">
      <label className="ListingForm__field-label" htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        onChange={handleInputChange}
        value={listing.description}
      />
    </div>
    <div className="ListingForm__field">
      <label className="ListingForm__field-label" htmlFor="instruction">
        Special instruction:
        <span className="ListingForm__input-info">
          Where/how should this be spread?
        </span>
      </label>
      <textarea
        id="instruction"
        name="instruction"
        onChange={handleInputChange}
        value={listing.instruction}
      />
    </div>
    <div className="ListingForm__field">
      <label className="ListingForm__field-label" htmlFor="tags">
        Tags
        <span className="ListingForm__input-info">(up to 3)</span>
      </label>
      <ReactTags
        autofocus={false}
        classNames={{
          tagInput: listing.tags.length >= 3
            ? 'display-none'
            : 'ReactTags__tagInput'
        }}
        handleAddition={handleTagAddition}
        handleDelete={handleTagDelete}
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
          key={link}
          index={index}
          onDeleteLink={handleDeleteLink}
          onUrlChange={handleUrlChange}
          url={link}
        />
      )}
      <button onClick={handleAddLink} type="button">
        Add +
      </button>
    </div>
    <div className="ListingForm__field">
      <label className="ListingForm__field-label" htmlFor="deadline">
        Deadline
        <span className="ListingForm__input-info">(if applicable)</span>
      </label>
      <DatePicker
        isClearable={true}
        minDate={moment()}
        maxDate={moment().add(1, 'year')}
        onChange={handleDateChange}
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
          onChange={handleColorInput}
        />
        B/W
      </label>
      <label className="ListingForm__radio-label">
        <input
          type="radio"
          name="isColor"
          value={COLOR_OPTIONS.color}
          checked={!!listing.isColor}
          onChange={handleColorInput}
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
          onChange={handleInputChange}
        />Letter
      </label>
      <label className="ListingForm__radio-label">
        <input
          type="radio"
          name="paperSize"
          value={PAPER_SIZES.tabloid}
          checked={listing.paperSize === PAPER_SIZES.tabloid}
          onChange={handleInputChange}
        />Tabloid (17 x 11)
      </label>
    </div>
  </div>;

ListingForm.propTypes = {
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
  listing: PropTypes.object.isRequired
};

export default ListingForm;
