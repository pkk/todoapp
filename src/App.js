import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends React.Component {
  state = {
    todos : [
      {id: 1, content: "check reddit"},
      {id: 2, content: "check jira"},
      {id: 3, content: "check slack"}
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    this.setState({
      todos : [...this.state.todos, todo]
    })
  }
  deleteTodo = (id) => {
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
