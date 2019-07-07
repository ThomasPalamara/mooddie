import React, { useState } from 'react';
import PropTypes from 'prop-types';
import YearSelector from './YearSelector';
import Calendar from './Calendar';

const MainFrame = props => {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearChange = e => {
    setYear(e.target.value);
  };

  return (
    <div>
      <h1 data-testid="title-calendar">Year {year}</h1>
      <YearSelector handleYearChange={handleYearChange} />
      <Calendar year={year.toString()} />
    </div>
  );
};

MainFrame.propTypes = {};

export default MainFrame;
