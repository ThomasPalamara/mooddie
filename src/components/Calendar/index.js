import React, { useState } from 'react';
import YearSelector from './YearSelector';
import Calendar from './Calendar';
import { CalendarStateProvider } from 'contexts/CalendarState';
import MoodPicker from 'components/Mood/MoodPicker';

const MainFrame = props => {
  const [year, setYear] = useState(new Date().getFullYear());

  const handleYearChange = e => {
    setYear(e.target.value);
  };

  return (
    <div>
      <h1 data-testid="title-calendar">Year {year}</h1>
      <YearSelector handleYearChange={handleYearChange} />
      <CalendarStateProvider>
      <MoodPicker month={'1'} day={'1'} />
        <Calendar year={year.toString()} />
      </CalendarStateProvider>
    </div>
  );
};

export default MainFrame;
