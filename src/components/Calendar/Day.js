import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: Try to finish popover component
// import Popover from 'components/ui/Popover';
import Button from 'components/ui/DayButton.js';
import { Popover } from 'antd';
import MoodPicker from 'components/Mood/MoodPicker';

const Day = props => {
  const { day, month, dayState } = props;
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = visible => {
    console.log(visible);
    setVisible(visible);
  };

  return (
    <Popover
      placement="topRight"
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
      content={
        <MoodPicker
          handleClose={() => {
            console.log('close');
            setVisible(false);
          }}
          day={day}
          month={month}
        />
      }>
      <Button>{dayState}</Button>
    </Popover>
  );
};

Day.propTypes = {
  day: PropTypes.string,
  month: PropTypes.string,
};

export default Day;
