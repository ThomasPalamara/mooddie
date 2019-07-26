import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Row = ({ children }) => {
  
  const Div = styled.div`
    display: flex;
  `;
  
  return <Div>{children}</Div>;
};

Row.propTypes = {};

export default Row;
