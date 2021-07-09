import React from "react";
import Todo from "./Todo";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="todo-container">
          <ul className="todo-list">
            {this.props.filteredTodos.map((todo) => (
              <Todo
                text={todo.text}
                key={todo.id}
                todos={this.props.todos}
                todo={todo}
                setTodos={this.props.setTodos}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
