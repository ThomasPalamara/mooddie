import React from 'react';
import MainFrame from 'components/Calendar';
import { YearContextProvider } from 'contexts/YearContext';

function App() {
  return (
    <div>
      <YearContextProvider>
        <MainFrame />
      </YearContextProvider>
    </div>
  );
}

export default App;
