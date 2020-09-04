import React from 'react';

import './newChore.css';

const NewChore = props => {
    const addChoreHandler = event => {
        event.preventDefault();

    const newChore = {
        id: Math.random().toString(),
        text: 'My new chore'
    };
<<<<<<< HEAD
    console.log(newChore); //check console to see if data appears
=======
    
    props.onAddChore(newChore);
>>>>>>> v2

    };

    return <form className="new-chore"onSubmit ={addChoreHandler}>
        <input type ="text" />
        <button type="submit">Add Chore </button>
    </form>


};

export default NewChore;