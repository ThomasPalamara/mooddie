import React, { useState } from 'react';
import YearSelector from './YearSelector';
import Calendar from './Calendar';
import CalendarStateContext from 'contexts/CalendarState';

const MainFrame = props => {
  const [year, setYear] = useState(new Date().getFullYear());
  const handleYearChange = e => {
    setYear(e.target.value);
  };

  return (
    <div>
      <h1 data-testid="title-calendar">Year {year}</h1>
      <YearSelector handleYearChange={handleYearChange} />
      <CalendarStateContext.Provider value={{ state, addMood: (mood, month, day) => setState({ ...state, [month]: { [day]: mood } }) }}>
        <Calendar year={year.toString()} />
      </CalendarStateContext.Provider>
    </div>
  );
};

export default MainFrame;
