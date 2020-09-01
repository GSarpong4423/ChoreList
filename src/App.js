import React from 'react';

import ChoreList from './components/ChoreList';
import './App.css';

const App = () => {
  const choreGoals = [
    {id:'cg1',text: 'Wash the Dishes'},
    {id:'cg1',text: 'Clean the kitchen'},
    {id:'cg1',text: 'CLean the bathroom'},
  ];

  return(
    <div className="chore-lists">
      <h2>Chores List</h2>
      <ChoreList items={choreGoals} />
  </div>
  ); 
};

export default App;
