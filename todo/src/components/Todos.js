import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggle_completed, delete_todo } from '../actions';
import Todo from './Todo';

class Todos extends React.Component {
  constructor() {
    super();
  this.state = {
    todo: ''
  }

}
addTodo = (e) => {
  e.preventDefault();
  this.props.addTodo(this.state.todo);
  this.setState({
    todo: ''
  })
}

delete_todo = (id) => {
  console.log('hi')
  this.props.delete_todo(id)
}

handleChanges= (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  })
}

toggle = (id) => {
  this.props.toggle_completed(id)
}


  render () {

    return (
      <div>
        {this.props.todos.map(todo =>
          <div key={Math.random()}>
            <Todo todo={todo.todo} completed={todo.completed} toggle={this.toggle} id={todo.id} deleteTodo={this.delete_todo} key={Math.random()}/>
          </div>
        )}
        <form onSubmit={ this.addTodo } >
          <input value={this.state.todo} name='todo' placeholder='Add Todo...' onChange={this.handleChanges} />
        </form>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { todos: state.todos}
}


export default connect(mapStateToProps, { addTodo, toggle_completed, delete_todo })(Todos);
