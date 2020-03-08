import React from 'react';
import Entry from '../Extry/Entry';
import { Chore as ChoreType, Person, Entry as EntryType } from '../../data/types';

type AppProps = { chore: ChoreType, people: { [name: string]: Person } };

const Chore = ({ chore, people }: AppProps) => {
  return (
    <div>
      { chore.id }
      { chore.frequency }
      <ul>
        { chore.history.map(
          (entry: EntryType) => <Entry
            entry={entry}
            people={people}
            key={`${chore.id}-${entry.timestamp}`}
          />
        ) }
      </ul>
    </div>
  )
}

export default Chore;
