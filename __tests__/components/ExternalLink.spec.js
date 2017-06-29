import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ExternalLink from '../../src/components/ExternalLink';

describe('ExternalLink', () => {
  it('renders as expected', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ExternalLink url="google.com" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
