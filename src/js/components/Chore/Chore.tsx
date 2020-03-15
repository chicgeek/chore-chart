import React from 'react';
import Entry from '../Entry/Entry';
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
  { chore, peopleList }: {
    chore: ChoreType,
    peopleList: { [name: string]: Person }
  }
) => {
  return (
    <ul className="timeline" data-period={ spans[chore.frequency] }>
      <div className="timeline__label">
        <h2 className="timeline__heading">
          { chore.id }
        </h2>
      </div>
      <Entry
        key={`${chore.id}-current`}
        peopleList={peopleList}
        current={true}
      />
      { chore.history.map(
        (entry: EntryType) => <Entry
          key={`${chore.id}-${entry.timestamp}`}
          person={entry.person}
          peopleList={peopleList}
        />
      ) }
    </ul>
  )
}


export default Chore;
