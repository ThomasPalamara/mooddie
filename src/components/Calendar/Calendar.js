import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

import Day from './Day';
import { CalendarStateContext } from 'contexts/CalendarState';
import checkNested from 'utils/checkNested';
import getMonthFromNum from 'utils/getMonthFromNum';

import styled from 'styled-components';
import _ from 'lodash';

const months = _.range(1, 13);
// const months = _.range(1, 3); // ! for tests

// TODO: Put in utils and add tests
const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

function DayWithContext(props) {
  const { day, month } = props;
  const [calendarState, setCalendarState] = useContext(CalendarStateContext);
  let dayState;
  checkNested(calendarState, month, day) ? (dayState = calendarState[month][day]) : (dayState = '');
  console.log(dayState);

  return useMemo(() => {
    return <Day {...props} dayState={dayState} />;
  }, [dayState]);
}

const Calendar = props => {
  const { year } = props;
  const calendarState = useContext(CalendarStateContext).state;

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

            {_.range(1, getDaysInMonth(month, year) + 1).map(day => (
              <Data data-testid="day" key={month + day}>
                <DayWithContext key={month + day} day={day.toString()} month={month.toString()} />
              </Data>
            ))}
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

Calendar.propTypes = {
  year: PropTypes.string,
};

export default Calendar;
