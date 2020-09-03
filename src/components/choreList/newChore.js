import React from 'react';

import './newChore.css';

const NewChore = () => {
    const addGoalHandler = event => {
        event.preventDefault();

    const newChore = {
        id: Math.random().toString(),
        text: 'My new chore'
    };
    console.log(newChore);

    };

    return <form className="new-chore"onSubmit ={addGoalHandler}>
        <input type ="text" />
        <button type="submit">Add Chore </button>
    </form>


};

export default NewChore;