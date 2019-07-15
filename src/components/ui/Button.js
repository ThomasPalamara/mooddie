import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {};

export default Button;
