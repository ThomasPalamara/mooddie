import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { CalendarStateContext } from 'contexts/CalendarState';
import { YearContext } from 'contexts/YearContext';

import Day from './Day';

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

  const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
  `;

  const Row = styled.tr`
    display: block;
    float: left;
    width: ${100 / 12}%;
  `;

  const Data = styled.td`
    display: block;
    border: 1px solid #777;
    margin: -1px -1px 0 0;
    height: 30px;
  `;

  return (
    <Table data-testid="calendar">
      <tbody>
        {months.map(month => (
          <Row data-testid="month" key={month}>
            <Data key={month}>{getMonthFromNum(month)}</Data>

            {_.range(1, getDaysInMonth(month, year) + 1).map(day => {
              return (
                <Data data-testid="day" key={month + day}>
                  <DayWithContext year={year} day={day.toString()} month={month.toString()} key={month + day} />
                </Data>
              );
            })}
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

export default Calendar;
