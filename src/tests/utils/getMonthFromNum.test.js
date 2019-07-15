import React from 'react';
import getMonthFromNum from 'utils/getMonthFromNum';
import { render, cleanup, fireEvent, rerender } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

// const years = [2018, 2019, 2020];

test('getMonthFromNum should return the month', () => {
  expect(getMonthFromNum(1)).toBe('January');
  expect(getMonthFromNum(11)).toBe('November');
});

test('getMonthFromNum should return undefined', () => {
  expect(getMonthFromNum(0)).toBe(undefined);
  expect(getMonthFromNum(18)).toBe(undefined);
});
