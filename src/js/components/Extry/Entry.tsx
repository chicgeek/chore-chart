import React from 'react';
import CSS from 'csstype';
import { Entry as EntryType, Person } from '../../data/types';

const style: CSS.Properties = {
  gridColumnEnd: true ? undefined : 'span 4' // mock actual frequency
};

const Entry = (
  { entry, people }: {
    entry: EntryType,
    people: { [name: string]: Person }
  }
) => (
  <li className="timeline__range" style={style}>
    <span className="marker" data-person={people[entry.person].name} />
  </li>
)

export default Entry;
