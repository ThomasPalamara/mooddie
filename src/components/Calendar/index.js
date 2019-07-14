import React, { useState } from 'react';
import YearSelector from './YearSelector';
import Calendar from './Calendar';
import { CalendarStateProvider } from 'contexts/CalendarState';
import MoodPicker from 'components/Mood/MoodPicker';
import Operations from './Operations';

const MainFrame = props => {
  const [year, setYear] = useState(new Date().getFullYear().toString());

  const handleYearChange = e => {
    setYear(e.target.value.toString());
  };

  return (
    <div>
      <h1 data-testid="title-calendar">Year {year}</h1>
      <YearSelector handleYearChange={handleYearChange} />
      <CalendarStateProvider>
        <Operations />
        <Calendar year={year} />
      </CalendarStateProvider>
    </div>
  );
};

export default MainFrame;
