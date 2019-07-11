import React, { useState } from 'react';

const CalendarStateContext = React.createContext([{}, () => {}]);

const CalendarStateProvider = props => {
  const initialState = { '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}, '8': {}, '9': {}, '10': {}, '11': {}, '12': {} };
  const [state, setState] = useState(initialState);
  return <CalendarStateContext.Provider value={[state, setState]}>{props.children}</CalendarStateContext.Provider>;
};

export { CalendarStateContext, CalendarStateProvider };
