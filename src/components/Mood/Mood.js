import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'components/ui/theme.js';

// TODO: FINISH STYLE FOR MOODS
const Mood = props => {
  const { element, style, children, mood, value, onClick } = props;

  console.log(theme.mood[mood]);
  const Element = styled[element]`
    background-color: ${theme.mood[mood]};
  `;

  return (
    <Element value={value} style={style} onClick={onClick}>
      {children}
    </Element>
  );
};

Mood.propTypes = {
  mood: PropTypes.string.isRequired,
  element: PropTypes.node,
  style: PropTypes.object,
  children: PropTypes.node,
  mood: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Mood;
