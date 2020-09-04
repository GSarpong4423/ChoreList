import React, {useState} from 'react';

import './newChore.css';

const NewChore = props => {
    const [enteredText, setEnteredText] = useState('');

    const addChoreHandler = event => {
        event.preventDefault();

    const newChore = {
        id: Math.random().toString(),
        text: enteredText
    };

    setEnteredText('');

    
    props.onAddChore(newChore);
};
    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    };

    return <form className="new-chore"onSubmit ={addChoreHandler}>
        <input type ="text" value={enteredText} onChange={textChangeHandler} />
        <button type="submit">Add Chore </button>
    </form>


};

export default NewChore;