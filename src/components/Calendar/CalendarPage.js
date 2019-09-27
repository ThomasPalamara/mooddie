import React from 'react';
import MainFrame from './MainFrame';
import { YearContextProvider } from 'contexts/YearContext';

const CalendarPage = () => (
  <YearContextProvider>
    <MainFrame />
  </YearContextProvider>
);

export default CalendarPage;
