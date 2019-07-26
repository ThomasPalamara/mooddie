import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Mood, MoodPicker } from 'components/Mood';
// TODO: Try to finish popover component
// import Popover from 'components/ui/Popover';
import { Popover } from 'antd';

const Day = props => {
  const { day, month, year, dayState } = props;
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = visible => {
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
            setVisible(false);
          }}
          day={day}
          month={month}
          year={year}
        />
      }>
      <Mood element="button" style={{ height: '100%', width: '100%', cursor: 'pointer' }} mood={dayState}>
        {dayState}
      </Mood>
    </Popover>
  );
};

Day.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  dayState: PropTypes.string,
};

export default Day;
