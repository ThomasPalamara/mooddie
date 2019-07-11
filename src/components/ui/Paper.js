import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Paper = props => {
  const { children, square } = this.props;

  const Container = styled.div`
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    padding: 2rem;
    ${props => {
      square && 'border-radius: 4px';
    }}
  `;

  return <Container>{children}</Container>;
};

Paper.propTypes = {
  children: PropTypes.node,
  square: PropTypes.bool,
};

Paper.defaultProps = {
  square: false,
};

export default Paper;
