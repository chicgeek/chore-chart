import React from 'react';
import CSS from 'csstype';
import { Person } from '../../data/types';
import Marker from '../Marker/Marker';

const style: CSS.Properties = {
  gridColumnEnd: true ? undefined : 'span 4' // mock actual frequency
};

const Entry = (
  { person = undefined, duration = undefined, peopleList = {}, current = false }: {
    person?: string | undefined,
    duration?: number | undefined,
    peopleList?: { [name: string]: Person },
    current?: boolean
  }
) => (
  <li className="timeline__range" style={style} data-duration={duration}>
    <Marker doer={person} peopleList={peopleList} current={current} />
  </li>
)

export default Entry;
