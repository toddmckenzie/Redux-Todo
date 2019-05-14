export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
//export const DELETE_TODO = 'DELETE_TODO';



export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}


export const toggle_completed = (todo) => {
  return {
    type: TOGGLE_COMPLETED,
    payload: todo.id
  }
}

 //export const delete_todo = () => {
//  return {
//    type: DELETE_TODO
//  }
//}
