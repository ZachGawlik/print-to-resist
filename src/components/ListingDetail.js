import React, { PropTypes } from 'react';
import ListingTile from './ListingTile';
import { BASE_URL } from '../constants';
import '../styles/ListingDetail.css';

const ListingDetail = ({
  isPrintInputOpen,
  listing,
  onCopiesChange,
  onPrintingSubmit,
  openPrintInput
}) => (
  <div className="ListingDetail">
    <div className="ListingDetail__info">
      <ListingTile listing={listing} />
      <div className="ListingDetail__description">
        <h3>Description:</h3>
        <p>{listing.description}</p>
      </div>
    </div>
    <div className="ListingDetail__files">
      <h3 className="ListingDetail__files-header">Poster files:</h3>
      <ul>
      {listing.imageIds.map((imageId, index) => (
        <li className="ListingDetail__files-link" key={imageId}>
          <a href={`${BASE_URL}/image/${imageId}`} target="_blank">
            Poster {index + 1}
          </a>
        </li>
      ))}
      </ul>
    </div>
    <div>
      <h3>Ready to print?</h3>
      <p>
        Open up the poster's file(s) above, and print them as you would anything else.
      </p>
      <p>
        Remember to print them in <strong>{listing.isColor ? 'color' : 'black and white'}</strong>,
        using <strong>{listing.paperSize}</strong> sized paper.
      </p>
      <p>
        Once printed, take your posters and stroll around town!
        If it's a traditional poster, grab a roll of tape.
        If it's more suited for takeaway informational flyers, leave them in key places.
      </p>
      {listing.instruction &&
        <div>
          <p>
            The person who uploaded the poster left some specific guidance for how to distribute the poster:
          </p>
          <p>
            {listing.instruction}
          </p>
        </div>
      }
      {isPrintInputOpen ?
        <div>
          <p>Let them know the word is being spread</p>
          <label>
            Copies:
            <input type="number" min="1" max="200" onChange={onCopiesChange} />
          </label>
          <button onClick={onPrintingSubmit}>Submit</button>
        </div> :
        <button onClick={openPrintInput}>Done!</button>
      }
    </div>
  </div>
);

ListingDetail.propTypes = {
  isPrintInputOpen: PropTypes.bool,
  listing: PropTypes.object.isRequired,
  onCopiesChange: PropTypes.func.isRequired,
  onPrintingSubmit: PropTypes.func.isRequired,
  openPrintInput: PropTypes.func.isRequired
};

export default ListingDetail
