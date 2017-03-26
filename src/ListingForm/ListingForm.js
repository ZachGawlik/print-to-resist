import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import Dropzone from 'react-dropzone';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './ListingForm.css';
import { submitForm } from './ListingFormActions';

const PAPER_SIZES = {
  letter: 'letter',
  tabloid: 'tabloid'
};

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: null,
      description: '',
      instructions: '',
      isColor: false,
      paperSize: PAPER_SIZES.letter,
      poster: null,
      thumbnail: null,
      testtest: null
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

  handleSubmit = (event) => {
    const data = new FormData();
    _.forEach(Object.keys(this.state), (field) => {
      data.append(field, this.state[field]);
    })

    submitForm(data);
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

  // TODO: validate required fields
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Thumbnail:
        </label>
        <div>
          {this.state.thumbnail &&
            <img alt="thumbnail" src={this.state.thumbnail.preview} />
          }
          <Dropzone
            accept="image/jpeg, image/png, application/pdf"
            onDropAccepted={this.handleThumbnailChange}
          >
            Add your thumbnail
          </Dropzone>
        </div>
        <label htmlFor="title">
          Title:
        </label>
        <input
          name="title"
          type="text"
          onChange={this.handleInputChange}
        />
        <div>
          <label>
            Poster:
          </label>
          <Dropzone
            accept="image/jpeg, image/png, application/pdf"
            disablePreview={true}
            onDropAccepted={this.handlePosterChange}
          >
            Add your Poster.
          </Dropzone>
        </div>
        <label htmlFor="description">
          Description
        </label>
        <textarea
          name="description"
          onChange={this.handleInputChange}
          value={this.state.description}
        />
        <label htmlFor="instructions">
          Special instructions:
        </label>
        <textarea
          name="instructions"
          onChange={this.handleInputChange}
          value={this.state.instructions}
        />
        <div>
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
        <div>
          <h3>Print in:</h3>
          <label>
            <input
              type="radio"
              name="isColor"
              value={false}
              checked={!this.state.isColor}
              onChange={this.handleInputChange}
            />Black and White
          </label>
          <label>
            <input
              type="radio"
              name="isColor"
              value={true}
              checked={this.state.isColor}
              onChange={this.handleInputChange}
            />Color
          </label>
        </div>
        <div>
          <h3>Page size</h3>
          <label>
            <input
              type="radio"
              name="paperSize"
              value="letter"
              checked={this.state.paperSize === PAPER_SIZES.letter}
              onChange={this.handleInputChange}
            />Letter
          </label>
          <label>
            <input
              type="radio"
              name="paperSize"
              value="tabloid"
              checked={this.state.paperSize === PAPER_SIZES.tabloid}
              onChange={this.handleInputChange}
            />Tabloid (17 x 11)
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default ListingForm;
