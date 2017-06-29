import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilterBar from '../../src/components/FilterBar';

describe('FilterBar', () => {
  it('renders as expected', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <FilterBar
        galleryFilters={{
          activeOnly: false,
          colorOption: '',
          tag: null
        }}
        setColorFilter={jest.fn()}
        setTagFilter={jest.fn()}
        toggleActiveOnly={jest.fn()}
      />
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
