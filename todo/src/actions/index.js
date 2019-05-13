export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const DELETE_TODO = 'DELETE_TODO';



export const addTodo = () => {
  return {
    type: ADD_TODO,
  }
}


export const toggle_completed = () => {
  return {
    type: TOGGLE_COMPLETED
  }
}

export const delete_todo = () => {
  return {
    type: DELETE_TODO
  }
}
