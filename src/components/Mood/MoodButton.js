import React from 'react';
import PropTypes from 'prop-types';

const MoodButton = props => {
  const { mood, handleClick } = props;

  return (
    <button onClick={handleClick} value={mood}>
      {mood}
    </button>
  );
};

MoodButton.propTypes = {
  mood: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default MoodButton;
