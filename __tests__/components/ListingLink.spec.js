import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ListingLink from '../../src/components/ListingLink';

describe('ListingLink', () => {
  it('renders as expected', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ListingLink listingId={5}>Go to listing</ListingLink>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
