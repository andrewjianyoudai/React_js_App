import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';


class Todo extends Component {
 

  render() {
    return this.props.todos.map((td) => ( // like forEach loop
       <Todoitem key={td.id} td = {td} 
          markComplete = {this.props.markComplete}
            delTodo ={ this.props.delTodo}
       />
    ));
  }
}

// PropTypes
Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todo;
