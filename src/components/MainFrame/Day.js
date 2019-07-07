import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Popover from 'components/ui/Popover';

const Day = props => {
  const { day } = props;

  const Button = styled.button`
    height: 100%;
    width: 100%;
    cursor: pointer;
  `;

  return (
    <Button>
      <div>{day}</div>
      <Popover position="top">TEST</Popover>
    </Button>
  );
};

Day.propTypes = {
  day: PropTypes.number
};

export default Day;
