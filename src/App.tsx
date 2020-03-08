import React from 'react';
import Chore from './components/Chore';
import { Data } from './types';

const App = ({ data }: { data: Data }) => {
  return (
    <div>
      <h1>Foo</h1>
      { data.chores.map(chore => <Chore chore={chore} people={data.people} />)}
    </div>
  );
}

export default App;
