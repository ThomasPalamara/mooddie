import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const startYear = 2019;
const actualYear = new Date().getFullYear();
const years = _.range(startYear, actualYear + 3);

const YearSelector = props => {
  const { handleYearChange } = props;
  return (
    <Select data-testid="year-select" defaultValue={actualYear} onChange={handleYearChange}>
      {years.map(year => (
        <Option key={year} value={year.toString()}>
          {year}
        </Option>
      ))}
    </Select>
  );
};

YearSelector.propTypes = {
  handleYearChange: PropTypes.func.isRequired,
};

export default YearSelector;
