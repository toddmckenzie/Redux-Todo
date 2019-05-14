import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO  } from '../actions';




const initialState =  {
  todos: [ {
    todo: 'run',
    completed: false,
    id: 6353737373
  },{
    todo: 'sleep',
    completed: true,
    id: 98232975302
   }]
}


function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state,
     todos: [
            ...state.todos,
          {
            todo: action.payload,
            completed: false,
            id: Date.now()
          }]
       }

    case TOGGLE_COMPLETED:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === action.payload){
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      }
     case DELETE_TODO:
        return {
          todos: state.todos.filter(todo => {
            if (todo.id !== action.payload){
              return {
                todo
              }
            }
          })
        }
      default:
        return state

    }
  }


export default reducer;
