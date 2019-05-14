import React from 'react';
import './todo.css'

const Todo = (props) => {
  //console.log(props.todo  + ' here here')
  let classStyle = 'non';
  if (props.completed) {
    classStyle = 'completedTask';
  }
  return (
    <div className={classStyle}>
      <p>{props.todo}</p>
    </div>
  )
}


export default Todo;
