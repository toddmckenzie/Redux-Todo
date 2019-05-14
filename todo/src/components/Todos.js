import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggle_completed } from '../actions';
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
  this.props.addTodo(this.state.todo)
}

handleChanges= (e) => {
  e.preventDefault();
  this.setState({
    [e.target.name]: e.target.value
  })
}


  render () {
    this.props.todos.map(todo =>
      console.log(todo.todo))
    return (
      <div>
        {this.props.todos.map(todo =>
          <Todo todo={todo.todo} toggle_completed={this.props.toggle_completed} key={Math.random()}/>
        )}
        <form onSubmit={() =>  this.addTodo() } >
          <input value={this.state.todo} name='todo' placeholder='Add Todo...' onChange={this.handleChanges} />
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  console.log(state)
  return {
    todos: state.todos
  }
}


export default connect(mapStateToProps, { addTodo, toggle_completed })(Todos);
