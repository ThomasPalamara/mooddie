import React, { useContext, useMemo } from 'react';
import _ from 'lodash';
import './style.scss';

import { CalendarStateContext } from 'contexts/CalendarState';
import { YearContext } from 'contexts/YearContext';

import Day from '../Day';

import checkNested from 'utils/checkNested';
import getMonthFromNum from 'utils/getMonthFromNum';
import getDaysInMonth from 'utils/getDaysInMonth';

const months = _.range(1, 13);
// const months = _.range(1, 3); // ! for tests

// ! <---- Important part of the component. Without useMemo, the usage of useContext would rerender the whole tree of 365 <Day/> which is expensive
function DayWithContext(props) {
  const { day, month, year } = props;
  const [calendarState] = useContext(CalendarStateContext);
  let dayState;
  checkNested(calendarState, year, month, day) ? (dayState = calendarState[year][month][day]) : (dayState = '');
  return useMemo(() => {
    return <Day {...props} dayState={dayState} />;
  }, [dayState, props]);
}

// ! ---->

const Calendar = props => {
  const [year] = useContext(YearContext);

  return (
    <table data-testid="calendar">
      <tbody>
        {months.map(month => (
          <tr data-testid="month" key={month}>
            <td key={month}>{getMonthFromNum(month)}</td>

            {_.range(1, getDaysInMonth(month, year) + 1).map(day => {
              return (
                <td data-testid="day" key={month + day}>
                  <DayWithContext year={year} day={day.toString()} month={month.toString()} key={month + day} />
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Calendar;
