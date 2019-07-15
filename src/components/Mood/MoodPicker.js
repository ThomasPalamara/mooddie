import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { moods } from 'utils/constants';
import MoodButton from './MoodButton';
import { CalendarStateContext } from 'contexts/CalendarState';

const MoodPicker = props => {
  const { day, month, year, handleClose } = props;
  const [state, setState] = useContext(CalendarStateContext);
  const Row = styled.div`
    display: flex;
  `;

  const handleMoodSelection = e => {
    const mood = e.target.value;
    if (!state[year]) {
      state[year] = {};
    }
    if (!state[year][month]) {
      state[year][month] = {};
    }

    state[year][month][day] = mood;
    setState(state => ({
      ...state,
      [year]: {
        ...state[year],
        [month]: {
          ...state[year][month],
          [day]: mood,
        },
      },
    }));
    handleClose && handleClose();
  };

  return (
    <div>
      <h4>How are you feeling today ?</h4>
      <Row>
        {moods.map(mood => (
          <button key={mood} onClick={handleMoodSelection} value={mood}>
            {mood}
          </button>
        ))}
      </Row>
    </div>
  );
};

MoodPicker.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string,
  handleClose: PropTypes.func,
};

export default MoodPicker;
