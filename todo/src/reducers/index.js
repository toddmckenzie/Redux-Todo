import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../actions';


const todos = [ { todo: 'Run', completed: false },
{ todo: 'Sleep', completed: false }]

const initialState = [...todos];



export default (state = initialState, action) => {
  switch(action.type){
    case ADD_TODO:
      return {
        [...todos],
        todo: state.text,
        completed: false
      }
    case TOGGLE_COMPLETED:
      return {
        [...todos],
        todo: state.text,
        completed: !state.completed
      }
    case DELETE_TODO:
      return {
        [...todos]
      }
  }
}
