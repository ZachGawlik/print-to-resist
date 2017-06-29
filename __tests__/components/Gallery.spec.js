import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Gallery from '../../src/components/Gallery';

const listing97 = {
  listingId: 97,
  deadline: '2017-06-01T04:00:00.000Z',
  description: 'Upcoming dates for NYC congress town halls',
  instruction: '',
  isColor: false,
  paperSize: 'Letter',
  dateSubmitted: '2017-04-13T13:49:47.000Z',
  isApproved: 1,
  title: 'NYC Congress Town Halls',
  thumbnailId: 'c0c51fba8b26122d2c368abbfd5da8b6.png',
  imageIds: ['c0753ac7045056c7f73779a80db8ae55.png'],
  tags: ['nyc', 'town hall'],
  links: []
};

describe('Gallery', () => {
  it('renders as expected', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Gallery
        galleryFilters={{
          activeOnly: false,
          colorOption: '',
          tag: null
        }}
        getListings={jest.fn()}
        listings={[listing97]}
        setColorFilter={jest.fn()}
        setTagFilter={jest.fn()}
        toggleActiveOnly={jest.fn()}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
