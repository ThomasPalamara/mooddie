import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { moods } from 'utils/constants';
import MoodButton from './MoodButton';
import { CalendarStateContext } from 'contexts/CalendarState';

const MoodPicker = props => {
  const { day, month, year } = props;
  const [state, setState] = useContext(CalendarStateContext);
  const Row = styled.div`
    display: flex;
  `;

  const handleMoodSelection = e => {
    const mood = e.target.value;
    if (!state[year]) {
      console.log('create year');
      state[year] = {};
    }
    if (!state[year][month]) {
      console.log('create month ', month);
      state[year][month] = {};
    }

    state[year][month][day] = mood;
    console.log(state);
    setState(state => ({
      ...state,
      [year]: {
        ...state[year],
        [month]: {
          ...state[year][month],
          [day]: mood
        }
      }
    }));
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
  day: PropTypes.string,
  month: PropTypes.string,
  year: PropTypes.string
};

export default MoodPicker;
