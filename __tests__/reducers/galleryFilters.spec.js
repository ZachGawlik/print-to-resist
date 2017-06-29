import galleryFilters from '../../src/reducers/galleryFilters';
import {
  setColorFilter,
  setTagFilter,
  toggleActiveOnly
} from '../../src/actions/galleryActions';
import { COLOR_OPTIONS } from '../../src/constants';

describe('Gallery Filters Reducer', () => {
  it('should return the initial state', () => {
    expect(galleryFilters(undefined, {})).toEqual({
      activeOnly: false,
      colorOption: '',
      tag: null
    });
  });

  it('should update the selected color option', () => {
    expect(
      galleryFilters(undefined, setColorFilter(COLOR_OPTIONS.bw))
    ).toEqual({
      activeOnly: false,
      colorOption: COLOR_OPTIONS.bw,
      tag: null
    });
  });

  it('should update the selected tag', () => {
    expect(galleryFilters(undefined, setTagFilter('nyc'))).toEqual({
      activeOnly: false,
      colorOption: '',
      tag: 'nyc'
    });
  });

  it('should toggle the activeOnly filter', () => {
    expect(galleryFilters(undefined, toggleActiveOnly())).toEqual({
      activeOnly: true,
      colorOption: '',
      tag: null
    });
  });
});
