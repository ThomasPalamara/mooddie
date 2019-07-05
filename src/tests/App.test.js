import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/App';
import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
