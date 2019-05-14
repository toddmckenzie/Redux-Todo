import { ADD_TODO, TOGGLE_COMPLETED  } from '../actions';




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
      return
        let obj = { ...state };
        Object.assign({}, obj, { todo: action.payload, completed: false, id: Date.now() })

    case TOGGLE_COMPLETED:
      return
        state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...state,
              completed: !todo.completed
            }
          }
          return todo
        })

      default:
        return state
      }
    }


export default reducer;
