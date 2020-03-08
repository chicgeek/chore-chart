import React from 'react';
import { Entry as EntryType, Person } from './../types';

type AppProps = { entry: EntryType, people: { [name: string]: Person } };

const Entry = ({ entry, people }: AppProps) => (
  <li>
    {entry.person}
    {people[entry.person].name}
  </li>
)

export default Entry;
