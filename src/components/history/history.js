import React from 'react';
import './history.scss';

function History(props) {
  return (
    <div>
      <h3>History:</h3>
      {props.history.map((item) => {
        return (
          <ul>
            <span className={[item.method]}>{item.method.toUpperCase()} </span> {item.url}
          </ul>
        );
      })}
    </div>
  );
}

export default History;