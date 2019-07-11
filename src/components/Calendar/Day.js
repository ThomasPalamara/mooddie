import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CalendarStateContext from 'contexts/CalendarState';
import checkNested from 'utils/checkNested';

// TODO: Try to finish popover component
// import Popover from 'components/ui/Popover';
import { Popover } from 'antd';
import MoodPicker from 'components/Mood/MoodPicker';

const Day = props => {
  const { day, month } = props;
  const calendarState = useContext(CalendarStateContext).state;
  let dayState;
  checkNested(calendarState, month, day) ? (dayState = calendarState[month][day]) : (dayState = '');
  const Button = styled.button`
    height: 100%;
    width: 100%;
    cursor: pointer;
  `;

  return useMemo(() => {
    console.log('updates');
    return (
      <Popover placement="topRight" trigger="click" content={<MoodPicker month={month} day={day} />}>
        <Button>{checkNested(calendarState, month, day) && calendarState[month][day]}</Button>
      </Popover>
    );
  }, [dayState]);
};

Day.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
};

export default Day;
