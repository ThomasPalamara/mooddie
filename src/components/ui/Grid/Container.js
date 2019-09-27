import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'components/ui/theme.js';

const Container = ({ children }) => {
  const Div = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: ${theme.breakpoint.sm}) {
      max-width: 540px;
    }
    @media (min-width: ${theme.breakpoint.md}) {
      max-width: 720px;
    }
    @media (min-width: ${theme.breakpoint.lg}) {
      max-width: 960px;
    }
    @media (min-width: ${theme.breakpoint.xl}) {
      max-width: 1140px;
    }
  `;

  return <Div>{children}</Div>;
};

Container.propTypes = {};

export default Container;
