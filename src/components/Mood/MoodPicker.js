import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { moods } from 'utils/constants';
import MoodButton from './MoodButton';
import CalendarStateContext from 'contexts/CalendarState';

const MoodPicker = props => {
  const { day, month } = props;
  const calendarState = useContext(CalendarStateContext);
  const Row = styled.div`
    display: flex;
  `;

  const handleMoodSelection = e => {
    const mood = e.target.value;
    calendarState.addMood(mood, month, day);
  };

  return (
    <div>
      <h4>How are you feeling today ?</h4>
      <Row>
        {moods.map(mood => (
          <MoodButton key={mood} mood={mood} handleClick={handleMoodSelection} />
        ))}
      </Row>
    </div>
  );
};

MoodPicker.propTypes = {
  day: PropTypes.string,
  year: PropTypes.string,
};

export default MoodPicker;
