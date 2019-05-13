import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggle_completed, delete_todo } from '../actions';


class Todos extends Component {


}





const mapStateToProps = (state) => {
  return {
    todo: state.todo,
    completed: state.completed
  }
}


export default connect(mapStateToProps, { addTodo, toggle_completed, delete_todo })(Todos)
