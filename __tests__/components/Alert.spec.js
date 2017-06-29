import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Alert from '../../src/components/Alert';

describe('Alert', () => {
  it('renders error as expected', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Alert type="error">Bad thing!</Alert>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('renders success as expected', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Alert type="success">Good thing!</Alert>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
