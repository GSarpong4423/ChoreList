import React from 'react';

import ChoreList from './components/choreList/ChoreList';
import NewChore from './components/choreList/newChore';
import './App.css';

const App = () => {
  const choreGoals = [
    {id:'cg1',text: 'Wash the Dishes'},
    {id:'cg2',text: 'Clean the kitchen'},
    {id:'cg3',text: 'CLean the bathroom'},
  ];

  return(
    <div className="chore-lists">
      <h2>Chores List</h2>
      <NewChore />
      <ChoreList items={choreGoals} />
  </div>
  ); 
};

export default App;
