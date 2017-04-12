import React, { PropTypes } from 'react';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import { WithContext as ReactTags } from 'react-tag-input'
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/ListingForm.css';
import '../styles/ReactTags.css'

const PAPER_SIZES = {
  letter: 'Letter',
  tabloid: 'Tabloid'
};

const COLOR_OPTIONS = {
  bw: 'bw',
  color: 'color'
};

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: null,
      description: '',
      instruction:'',
      isColor: false,
      paperSize: PAPER_SIZES.letter,
      poster: null,
      tags: [],
      title: '',
      thumbnail: null
    };
  }

  static propTypes = {
    postListing: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
  }

  isValid = () => {
    return (
      !!this.state.description &&
      !!this.state.poster &&
      !!this.state.title &&
      !!this.state.thumbnail
    );
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

  handleSubmit = (event) => {
    const data = new FormData();
    Object.keys(this.state).forEach((field) => {
      if (field === 'tags') {
        this.state.tags.forEach(tag => {
          data.append(field, tag.id);
        })
      } else {
        data.append(field, this.state[field]);
      }
    })

    if (this.isValid()) {
      this.props.postListing(data);
    }
    event.preventDefault();
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

  render() {
    return (
      <form className="Listing-Form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="thumbnail-input">
            Thumbnail:
          </label>
          <div>
            {this.state.thumbnail &&
              <img
                alt="thumbnail"
                className="Listing-Form__preview"
                src={this.state.thumbnail.preview}
              />
            }
            <Dropzone
              accept="image/jpeg, image/png"
              inputProps={{id: 'thumbnail-input'}}
              onDropAccepted={this.handleThumbnailChange}
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
            onChange={this.handleInputChange}
          />
        </div>
        <div className="field">
          <label htmlFor="poster-input">
            Poster:
          </label>
          {this.state.poster &&
            this.state.poster.name}
          <Dropzone
            accept="image/jpeg, image/png, application/pdf"
            disablePreview={true}
            inputProps={{id: 'poster-input'}}
            onDropAccepted={this.handlePosterChange}
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
            onChange={this.handleInputChange}
            value={this.state.description}
          />
        </div>
        <div className="field">
          <label htmlFor="instruction">
            Special instruction:
          </label>
          <textarea
            name="instruction"
            onChange={this.handleInputChange}
            value={this.state.instruction}
          />
        </div>
        <div className="field">
          <label htmlFor="tags">
            Tags
          </label>
          <ReactTags
            autofocus={false}
            classNames={{
              tagInput: this.state.tags.length >= 3 ? 'display-none' : 'ReactTags__tagInput'
            }}
            handleAddition={this.handleTagAddition}
            handleDelete={this.handleTagDelete}
            minQueryLength={1}
            name="tags"
            tags={this.state.tags}
          />
        </div>
        <div className="field">
          <label>Deadline</label>
          <DatePicker
            isClearable={true}
            minDate={moment()}
            maxDate={moment().add(1, "year")}
            onChange={this.handleDateChange}
            placeholderText="deadline"
            selected={this.state.deadline}
          />
        </div>
        <div className="field">
          <p>Print in:</p>
          <label>
            <input
              type="radio"
              name="isColor"
              value={COLOR_OPTIONS.bw}
              checked={!this.state.isColor}
              onChange={this.handleColorInput}
            />
            B/W
          </label>
          <label>
            <input
              type="radio"
              name="isColor"
              value={COLOR_OPTIONS.color}
              checked={!!this.state.isColor}
              onChange={this.handleColorInput}
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
              checked={this.state.paperSize === PAPER_SIZES.letter}
              onChange={this.handleInputChange}
            />Letter
          </label>
          <label>
            <input
              type="radio"
              name="paperSize"
              value={PAPER_SIZES.tabloid}
              checked={this.state.paperSize === PAPER_SIZES.tabloid}
              onChange={this.handleInputChange}
            />Tabloid (17 x 11)
          </label>
        </div>
        <input type="submit" value="Submit" disabled={!this.isValid()} />
      </form>
    )
  }
}

export default ListingForm;
