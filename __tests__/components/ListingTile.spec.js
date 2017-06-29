import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ListingTile from '../../src/components/ListingTile';

describe('ListingTile', () => {
  it('renders as expected', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <ListingTile
        tags={[]}
        title="Upcoming Town Halls"
        thumbnailId="testImageId"
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
