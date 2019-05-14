import React from 'react';
import './todo.css'

const Todo = (props) => {
  //console.log(props.todo  + ' here here')
  let classStyle = 'non';
  if (props.completed) {
    classStyle = 'completedTask';
  }

  return (
    <div className="flexes">
      <p className={classStyle} onClick={() => props.toggle(props.id)}>{props.todo}</p>
      <button onClick={() => props.deleteTodo(props.id)}>Delete Todo </button>
    </div>
  )
}


export default Todo;
