import { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [ dataItems , setDataItems ] = useState(null);

  const getItems = async () => {
    //const response = await fetch('https://rickandmortyapi.com/api/character/1');
    const response = await fetch('https://rickandmortyapi.com/api/character/1');
    const data = await response.json();
    setDataItems( data );
  }
  

  useEffect( ()=> {
    getItems();
  }, [])

  return (
    <>
      {
        dataItems 
        ?
          <p>{dataItems.name}</p>
        : 

        <p>No hay </p>
      }
    </>
  );
}

export default App
