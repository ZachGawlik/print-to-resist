import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Tag from '../../src/components/Tag';

describe('Tag', () => {
  it('renders unclickable tag', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Tag name="test" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('renders clickable tag', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Tag name="test" onClick={jest.fn()} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
