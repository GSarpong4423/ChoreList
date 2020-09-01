import React from 'react';

import ChoreList from './components/ChoreList';
import './App.css';

const App = () => {
  return(
    <div className="chore-lists">
      <h2>Chores List</h2>
      <ChoreList/>
  </div>
  ); 
};

export default App;
