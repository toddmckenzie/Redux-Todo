export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
//export const DELETE_TODO = 'DELETE_TODO';



export const addTodo = (newTodo) => {
  console.log(newTodo)
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}


export const toggle_completed = (id) => {
  console.log(id)
  return {
    type: TOGGLE_COMPLETED,
    payload: id
  }
}

 //export const delete_todo = () => {
//  return {
//    type: DELETE_TODO
//  }
//}
