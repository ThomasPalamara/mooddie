import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isContainer } from 'postcss-selector-parser';

// ! https://material-ui.com/components/popover/

const popover = props => {
  const { children, position } = props;

  const Container = styled.div`
    position: absolute;
    ${props => {
      switch (position) {
        case 'top':
          return 'top:0;';
          break;

        default:
          break;
      }
    }};
  `;
  return <Container>{children}</Container>;
};

popover.propTypes = {};

export default popover;
