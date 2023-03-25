import React from 'react';
import { useAppSelector } from '../store/store';

type Props = {}

const PersonsList = (props: Props) => {
    const persons = useAppSelector(state=>state.person.persons);

  return (
    <div>
        <div>PersonsList</div>
        {
            persons.map(person => {
                return <div key={person.id}>ID: {person.id} NAME:{person.name}</div>
            })
        }
    </div>
  )
}

export default PersonsList;