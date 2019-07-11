import React from 'react';
import { Popover } from 'antd';
import { render, cleanup, fireEvent, rerender } from '@testing-library/react';

afterEach(() => {
  cleanup();
});

test('<Popover/> should open the pop on click ', () => {
  // const wrapper = render(<Popover content="Pop" children={<button>Open</button>} />);
  // const { debug, getByText } = wrapper;
  // fireEvent.click(getByText('Open'));
  // debug();
  // expect(getByText('Pop')).toBeTruthy();
});
