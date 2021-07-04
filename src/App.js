import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import {originals, action,comedy,horror } from './urls';
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
