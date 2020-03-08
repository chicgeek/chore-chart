import React from 'react';
import Chore from './components/Chore/Chore';
import { Data } from './data/types';

const App = ({ data }: { data: Data }) => {
  return (
    <div>
      <h1>Foo</h1>
      { data.chores.map(
        chore => <Chore
          key={chore.id}
          chore={chore}
          people={data.people}
        />
      )}
    </div>
  );
}

export default App;
