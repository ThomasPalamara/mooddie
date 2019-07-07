import React from 'react';
import PropTypes from 'prop-types';

import Day from './Day';
import getMonthFromNum from 'helpers/getMonthFromNum';

import styled from 'styled-components';
import _ from 'lodash';

const months = _.range(1, 13);

const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

const Calendar = props => {
  const { year } = props;

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
              <Data
                data-testid="day"
                key={month + day}
                data-month={month}
                data-day={day}
              >
                <Day day={day} />
              </Data>
            ))}
          </Row>
        ))}
      </tbody>
    </Table>
  );
};

Calendar.propTypes = {
  year: PropTypes.string
};

export default Calendar;
