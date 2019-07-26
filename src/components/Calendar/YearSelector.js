import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const startYear = 2018;
const actualYear = new Date().getFullYear();

const years = _.range(startYear, actualYear + 2);

const YearSelector = props => {
  const { handleYearChange } = props;
  return (
    <select data-testid="year-select" onChange={handleYearChange}>
      {years.map(year => (
        <option key={year} value={year.toString()}>
          {year}
        </option>
      ))}
    </select>
  );
};

YearSelector.propTypes = {
  handleYearChange: PropTypes.func.isRequired,
};

export default YearSelector;
