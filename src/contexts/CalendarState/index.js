import React, { useState } from 'react';

const CalendarStateContext = React.createContext([{}, () => {}]);

const CalendarStateProvider = props => {
  const initialState = {};
  const [state, setState] = useState(initialState);
  return (
    <CalendarStateContext.Provider value={[state, setState]}>
      {props.children}
    </CalendarStateContext.Provider>
  );
};

export { CalendarStateContext, CalendarStateProvider };
