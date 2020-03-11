import React from 'react';
import { Person } from '../../data/types';

const Marker = (
  { doer = undefined, peopleList = {}, current = false }: {
    doer?: string | undefined,
    peopleList?: { [name: string]: Person },
    current?: boolean
  }
) => (
  <input
    type="checkbox"
    className={`marker ${current ? 'marker--current' : ''}`}
    checked={current ? undefined : true}
    disabled={!current}
  />
)

export default Marker;
