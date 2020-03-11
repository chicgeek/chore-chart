import React from 'react';
import Chore from './components/Chore/Chore';
import { Data } from './data/types';

const App = ({ data }: { data: Data }) => {
  return (
    <div>
      <h1>Foo</h1>
      <div className="group">
        { data.chores.map(
          chore => <Chore
            key={chore.id}
            chore={chore}
            peopleList={data.people}
          />
        )}
      </div>
    </div>
  );
}

export default App;
