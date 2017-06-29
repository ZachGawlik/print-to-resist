import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LinkInput from '../../src/components/LinkInput';

describe('LinkInput', () => {
  it('renders as expected', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <LinkInput
        index={1}
        onUrlChange={jest.fn()}
        onDeleteLink={jest.fn()}
        url="google.com"
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
