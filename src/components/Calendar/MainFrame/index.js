import React, { useContext } from 'react';

import YearSelector from '../YearSelector';
import Calendar from '../Table';
import Operations from '../Operations';
import { Container } from 'components/ui';

import { CalendarStateProvider } from 'contexts/CalendarState';
import { YearContext } from 'contexts/YearContext';

const MainFrame = props => {
  const [year, setYear] = useContext(YearContext);
  // const [year, setYear] = useState(new Date().getFullYear().toString());

  const handleYearChange = e => {
    setYear(e);
  };

  return (
    <Container>
      <h1 data-testid="title-calendar">Year {year}</h1>
      {<YearSelector handleYearChange={handleYearChange} />}
      <CalendarStateProvider>
        <Operations />
        {<Calendar />}
      </CalendarStateProvider>
    </Container>
  );
};

export default MainFrame;
