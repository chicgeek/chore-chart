import React from 'react';
import { ChoreType } from './types';

type AppProps = { chore: ChoreType, people: PeopleType };

const Chore = ({ chore, people }: AppProps) => {
  return (
    <div>
      { chore.id }
      { chore.frequency }
      <ul>
        { chore.history.map(entry => {
          return (<li>
              { entry.person }
              // { people[entry.person].name }
          </li>)
        }) }
      </ul>
    </div>
  )
}

export default Chore;
