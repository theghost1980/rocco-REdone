import React, { useEffect } from 'react'
import Add from './components/Add';
import PersonsList from './components/PersonsList';
import { fetchPerson } from './store/features/personSlice';
import { useAppDispatch, useAppSelector } from './store/store';

//TODO
//  - add router + navigation + router layout
//  - add protected routes(user profile + user download history...etc)
//  - add redux using toolkit for app state management (partially done)
//    - keep learning about how to handle async fetching.
//  - start redoing the whole site.
//  - install react bootstrap
//  - find a better way to handle email subscriptions, image gallery & download files
//  - would be interesting having a blog so Rocco may write, get responses, etc.
const App = () => {
  const dispatch = useAppDispatch();
  const fetchedPerson = useAppSelector(state=>state.person.fecthedPerson);
  
  useEffect(() => {
    dispatch(fetchPerson());
  })

  // useEffect(() => {
  //   console.log({fetchedPerson});
  // }, [fetchedPerson])

  const scanObjectRender = (obj: any) => {
    for(const [key,value] of Object.entries(obj)){
      console.log({key, value});
      return <div>
        <div>{key} {JSON.stringify(value)}</div>
      </div>
    }
  };
  
  
  return (
    <div>
        <h1>Work in Progress</h1>
        <div>Setting up, redux toolkit store bellow</div>
        <Add />
        <PersonsList />
        {scanObjectRender(useAppSelector(state=>state.person.fecthedPerson))}
        {/* {fetchedPerson &&  scanObjectRender(fetchedPerson)} */}
    </div>
  )
}

export default App;
