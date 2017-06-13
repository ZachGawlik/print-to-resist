import React from 'react';
import PropTypes from 'prop-types';
import Tag from './Tag';
import { COLOR_OPTIONS } from '../constants';

class FilterBar extends React.Component {
  setColorFilterOption = event => {
    this.props.setColorFilter(event.target.value);
  };

  clearTagFilter = () => {
    this.props.setTagFilter(null);
  };

  render() {
    const { galleryFilters, toggleActiveOnly } = this.props;
    return (
      <div>
        <ul>
          <li>
            <label>
              Show only upcoming events {' '}
              <input
                type="checkbox"
                checked={galleryFilters.activeOnly}
                onChange={toggleActiveOnly}
              />
            </label>
          </li>
          <li>
            <label>
              To be printed in: {' '}
              <select
                value={galleryFilters.colorOption || ''}
                onChange={this.setColorFilterOption}
              >
                <option value="">All</option>
                <option value={COLOR_OPTIONS.color}>
                  {COLOR_OPTIONS.color}
                </option>
                <option value={COLOR_OPTIONS.bw}>{COLOR_OPTIONS.bw}</option>
              </select>
            </label>
          </li>
        </ul>
        <p>
          Showing {galleryFilters.activeOnly ? 'active' : 'all'}
          {galleryFilters.colorOption &&
            <span>{' '}to be printed in {galleryFilters.colorOption}</span>}
          {galleryFilters.tag &&
            <span>
              {' '}with tag{' '}
              <Tag onClick={this.clearTagFilter} name={galleryFilters.tag} />
            </span>}
        </p>
      </div>
    );
  }
}

FilterBar.propTypes = {
  galleryFilters: PropTypes.shape({
    colorOption: PropTypes.string.isRequired,
    activeOnly: PropTypes.bool.isRequired,
    tag: PropTypes.string
  }).isRequired,
  setColorFilter: PropTypes.func.isRequired,
  setTagFilter: PropTypes.func.isRequired,
  toggleActiveOnly: PropTypes.func.isRequired
};

export default FilterBar;
