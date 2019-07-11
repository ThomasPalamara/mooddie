import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: Try to finish popover component
// import Popover from 'components/ui/Popover';
import { Popover } from 'antd';
import MoodPicker from 'components/Mood/MoodPicker';

const Day = props => {
  const { day, month } = props;
  const Button = styled.button`
    height: 100%;
    width: 100%;
    cursor: pointer;
  `;

  console.log('updates');
  return (
    <Popover placement="topRight" trigger="click" content={<MoodPicker month={month} day={day} />}>
      <Button>{}</Button>
    </Popover>
  );
};

Day.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
};

export default Day;
