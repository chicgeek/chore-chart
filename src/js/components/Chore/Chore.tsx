import React from 'react';
import Entry from '../Extry/Entry';
import { Chore as ChoreType, Person, Entry as EntryType } from '../../data/types';

interface Spans {
  [key: string]: number;
}

const spans: Spans = {
  'day': 1,
  'week': 7,
  '2 weeks': 14,
  '1 month': 30,
}

const Chore = (
  { chore, people }: {
    chore: ChoreType,
    people: { [name: string]: Person }
  }
) => {
  return (
    <ul className="timeline" data-period={ spans[chore.frequency] }>
      { chore.history.map(
        (entry: EntryType) => <Entry
          entry={entry}
          people={people}
          key={`${chore.id}-${entry.timestamp}`}
        />
      ) }
    </ul>
  )
}


export default Chore;
