import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Entry';
import { data as mock } from './../../data/mock';

const defaultProps = {
  entry: mock.chores[0].history[0],
  people: mock.people
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Entry {...defaultProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
