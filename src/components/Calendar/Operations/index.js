import React, { useContext } from 'react';

import { CalendarStateContext } from 'contexts/CalendarState';

import Button from 'components/ui/Button';

import getDaysInMonth from 'utils/getDaysInMonth';
import { moods } from 'utils/constants';

const Operations = props => {
  const [state, setState] = useContext(CalendarStateContext);

  const resetCalendar = e => {
    setState({});
  };

  const generateRandomData = () => {
    const year = 2019;
    let objReturned = { [year]: {} };
    for (let i = 1; i <= 12; i++) {
      objReturned[year][i] = {};
      for (let j = 0; j <= getDaysInMonth(i, year); j++) {
        objReturned[year][i][j] = moods[Math.floor(Math.random() * moods.length)];
      }
    }
    setState(objReturned);
  };
  return (
    <div>
      <Button onClick={resetCalendar}>Reset</Button>
      <Button onClick={generateRandomData}>Random</Button>
    </div>
  );
};

export default Operations;
