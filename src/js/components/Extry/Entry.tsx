import React from 'react';
import { Entry as EntryType, Person } from '../../data/types';

const Entry = (
  { entry, people }: {
    entry: EntryType,
    people: { [name: string]: Person }
  }
) => (
  <li>
    {entry.person}
    {people[entry.person].name}
  </li>
)

export default Entry;
