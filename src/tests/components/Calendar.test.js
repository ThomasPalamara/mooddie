import React from 'react';
import Calendar from 'components/MainFrame/Calendar';
import { render, cleanup, fireEvent, rerender } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

test('<Calendar should display the right number of days and months', () => {
  const wrapper = render(<Calendar year="2019" />);
  const {
    debug,
    container,
    queryByTestId,
    getByTestId,
    getAllByTestId
  } = wrapper;

  expect(getAllByTestId('day').length).toBe(365);
  expect(getAllByTestId('month').length).toBe(12);

  expect(getAllByTestId('month')[0].querySelectorAll('td').length).toBe(31 + 1); // Days + "header"
  expect(getAllByTestId('month')[1].querySelectorAll('td').length).toBe(28 + 1);
  expect(getAllByTestId('month')[8].querySelectorAll('td').length).toBe(30 + 1);
});
