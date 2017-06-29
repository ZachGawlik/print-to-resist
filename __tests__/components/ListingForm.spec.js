import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ListingForm from '../../src/components/ListingForm';

const blankListing = {
  deadline: null,
  description: '',
  instruction: '',
  isColor: false,
  links: [],
  paperSize: 'Letter',
  poster: null,
  tags: [],
  title: '',
  thumbnail: null
};

describe('ListingForm', () => {
  it('renders as expected', () => {
    Date.now = jest.fn(() => 1482363367071);
    const renderer = new ShallowRenderer();
    renderer.render(
      <ListingForm
        handleAddLink={jest.fn()}
        handleColorInput={jest.fn()}
        handleDateChange={jest.fn()}
        handleDeleteLink={jest.fn()}
        handleInputChange={jest.fn()}
        handlePosterChange={jest.fn()}
        handleTagAddition={jest.fn()}
        handleTagDelete={jest.fn()}
        handleThumbnailChange={jest.fn()}
        handleUrlChange={jest.fn()}
        listing={blankListing}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
