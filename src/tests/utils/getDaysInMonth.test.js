import React from 'react';
import getDaysInMonth from 'utils/getDaysInMonth';
import { render, cleanup, fireEvent, rerender } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// const years = [2018, 2019, 2020];

<<<<<<< HEAD
test('getMonthFromNum should return the right number of days', () => {
=======
test('getDaysInMonth should return the right number of days', () => {
>>>>>>> 3a09d7d9a3ac5c593a3cb77139c2489b76e1e6dc
  expect(getDaysInMonth(1, 2019)).toBe(31);
  expect(getDaysInMonth(11, 2019)).toBe(30);
  expect(getDaysInMonth(2, 2019)).toBe(28);
  expect(getDaysInMonth(2, 2020)).toBe(29);
});
