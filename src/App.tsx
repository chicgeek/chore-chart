import React from 'react';
import { Chore } from './components/Chore';
import { Data } from './types';

type AppProps = { data: Data };

const App = ({ data }: AppProps) => {
  return (
    <div>
      <h1>Foo</h1>
      { data.chores.map(chore => <Chore chore={chore} people={data.people} />)}
    </div>
  );
}

export default App;
