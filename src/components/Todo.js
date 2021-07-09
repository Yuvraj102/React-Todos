import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteHandler = () => {
    this.props.setTodos(
      this.props.todos.filter((el) => el.id !== this.props.todo.id)
    );
  };
  completeHandler = () => {
    this.props.setTodos(
      this.props.todos.map((item) => {
        if (item.id === this.props.todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  render() {
    return (
      <div className="todo">
        <li
          className={`todo-item ${
            this.props.todo.completed ? "completed" : ""
          }`}
        >
          {this.props.text}
        </li>
        <button onClick={this.completeHandler} className="complete-btn">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={this.deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  }
}
export default Todo;
