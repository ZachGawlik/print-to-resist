import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Intro from '../../src/components/Intro';

describe('Intro', () => {
  it('renders as expected', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Intro />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
