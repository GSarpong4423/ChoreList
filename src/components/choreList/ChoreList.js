import React from 'react';

import './ChoreList.css';

const ChoreList = props => {
    return (
      <ul className="chore-list">
        {props.items.map(item => {
            return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
  );
};

export default ChoreList;
