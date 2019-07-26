import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { CalendarStateContext } from 'contexts/CalendarState';

import Mood from './Mood';
import { Row } from 'antd';

import { moods } from 'utils/constants';

const MoodPicker = props => {
  const { day, month, year, handleClose } = props;
  const [state, setState] = useContext(CalendarStateContext);

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
          <Mood key={mood} mood={mood} element="button" onClick={handleMoodSelection} value={mood}>
            {mood}
          </Mood>
        ))}
      </Row>
    </div>
  );
};

MoodPicker.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  handleClose: PropTypes.func,
};

export default MoodPicker;
