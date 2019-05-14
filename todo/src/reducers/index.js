import { ADD_TODO, TOGGLE_COMPLETED  } from '../actions';




const initialState =  {
  todos: [ {
    todo: 'run',
    completed: false,
    id: 6353737373
  },{
    todo: 'sleep',
    completed: false,
    id: 98232975302
   }]
}


export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return
        let obj = { ...state };
        Object.assign({}, obj, { todo: action.payload, completed: false, id: Date.now() })

    case TOGGLE_COMPLETED:
      return
        state.todos.map((todo => {
          if (todo.id === todo.payload) {
            Object.assign({},todo,{ completed: !todo.completed})
          }

      }))
      default:
        return state
      }
    }
