import React from 'react';


const Todo = (props) => {
  return (
    <div toggle_completed={props.toggle_completed}>
      <p>{props.todo}</p>
    </div>
  )
}


export default Todo;
