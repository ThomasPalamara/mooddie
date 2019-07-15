import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

const DayButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

DayButton.propTypes = {};

export default DayButton;
