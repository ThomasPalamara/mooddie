import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isContainer } from 'postcss-selector-parser';

const Popover = props => {
  const { children, position, popBody } = props;
  let anchorEl = useRef(null);
  let popEl = useRef(null);

  const [open, setOpen] = useState(false);
  const [popStyle, setPopStyle] = useState({});

  let Pop = styled.div`
    position: absolute;
    z-index: 100;
    background-color: #fff;
    padding: 15px;
  `;

  useEffect(() => {
    if (anchorEl.current && popEl.current) {
      let style = '';
      console.log(ReactDOM.findDOMNode(anchorEl.current).getBoundingClientRect());
      const { bottom, right, left, top } = ReactDOM.findDOMNode(anchorEl.current).getBoundingClientRect();
      const { width: popWidth, height: popHeight } = ReactDOM.findDOMNode(popEl.current).getBoundingClientRect();
      const offset = 5;

      const getPosVal = (pos, popSize) => {
        console.log(offset);
        return pos - (offset + popSize);
      };

      setPopStyle({ top: position - (offset + popHeight) });

      // switch (position) {
      //   case 'top':
      //     style = { top: getPosVal(top, popHeight) };
      //     break;

      //   case 'bottom':
      //     style = { top: getPosVal(bottom, popHeight) };
      //     break;

      //   case 'right':
      //     style = { top: getPosVal(right, popWidth) };
      //     break;

      //   case 'left':
      //     style = { top: getPosVal(left, popWidth) };
      //     break;

      //   default:
      //     break;
      // }
      // setPopStyle(style);
    }
  }, [open]);

  const setPopPosition = () => {};

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      {React.cloneElement(children, { ref: anchorEl, onClick: handleOpen })}
      {open && (
        <Pop style={popStyle} ref={popEl}>
          {popBody}
        </Pop>
      )}
    </React.Fragment>
  );
};

Popover.propTypes = {
  position: PropTypes.string,
  popBody: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Popover.defaultProps = {
  position: 'top',
  popBody: '',
};

export default Popover;
