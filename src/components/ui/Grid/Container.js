import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const Container = ({ children }) => {

  const themeContext = useContext(ThemeContext);

  const Div = styled.div`
  display: flex;
`;

  return <Div>{children}</Div>;
};

Container.propTypes = {};

export default Container;
