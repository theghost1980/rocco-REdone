import React, { useState } from 'react'
import { addPerson } from '../store/features/personSlice';
import { useAppDispatch } from '../store/store';

type Props = {}

const Add = (props: Props) => {
    const [name, setName] = useState('');
    const dispatch = useAppDispatch();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('About to set', {name});
        dispatch(addPerson({name}))
    };

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="input_name">Person's Name:</label>
        <input name='input_name' 
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
    </form>
  )
}

export default Add;