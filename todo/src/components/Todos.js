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

toggle = (id) => {
  this.props.toggle_completed(id)
}


  render () {
    //this.props.todos.map(todo =>
    //  console.log(todo.completed))
    return (
      <div>
        {this.props.todos.map(todo =>
          <div onClick={() => this.toggle(todo.id) } key={Math.random()}>
            <Todo todo={todo.todo}  key={Math.random()}/>
          </div>
        )}
        <form onSubmit={ this.addTodo } >
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
