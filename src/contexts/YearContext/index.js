import React, { useState } from 'react';

const YearContext = React.createContext([{}, () => {}]);

const YearContextProvider = props => {
  const initialState = new Date().getFullYear().toString();
  const [state, setState] = useState(initialState);
  return <YearContext.Provider value={[state, setState]}>{props.children}</YearContext.Provider>;
};

export { YearContext, YearContextProvider };
