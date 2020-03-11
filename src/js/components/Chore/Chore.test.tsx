import React from 'react';
import ReactDOM from 'react-dom';
import Chore from './Chore';
import { data as mock } from './../../data/mock';

const defaultProps = {
  chore: mock.chores[0],
  peopleList: mock.people
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chore {...defaultProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
