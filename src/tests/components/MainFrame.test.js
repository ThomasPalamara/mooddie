import React from 'react';
import MainFrame from 'components/Calendar/CalandarPage';
import Calendar from 'components/Calendar/Table/Calendar';
import { render, cleanup, fireEvent, rerender } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// const years = [2018, 2019, 2020];

test('title-calendar should change on year selection', () => {
  const wrapper = render(<MainFrame />);
  const { getByTestId } = wrapper;
  fireEvent.change(getByTestId('year-select'), { target: { value: '2019' } });
  expect(getByTestId('title-calendar').textContent).toBe('Year 2019');

  fireEvent.change(getByTestId('year-select'), { target: { value: '2018' } });
  expect(getByTestId('title-calendar').textContent).toBe('Year 2018');
});

test('<Calendar /> should change on year selection + leap years', () => {
  const wrapper = render(<MainFrame />);
  const { getByTestId, getAllByTestId } = wrapper;

  fireEvent.change(getByTestId('year-select'), { target: { value: '2019' } });
  expect(getAllByTestId('month')[1].querySelectorAll('td').length).toBe(28 + 1); // Days + "header"

  fireEvent.change(getByTestId('year-select'), { target: { value: '2020' } }); // Leap year
  expect(getAllByTestId('month')[1].querySelectorAll('td').length).toBe(29 + 1);
});
