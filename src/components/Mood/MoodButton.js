import React from 'react';
import PropTypes from 'prop-types';

const MoodButton = props => {
  const { children } = props;

  return <button>{children}</button>;
};

export default MoodButton;
