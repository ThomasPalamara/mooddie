import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.scss';

// TODO: FINISH STYLE FOR MOODS
const Mood = props => {
  const { element: Element, style, children, mood, value, onClick } = props;

  return (
    <Element value={value} className={`${styles.mood} ${styles[mood]}`} style={style} onClick={onClick}>
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
