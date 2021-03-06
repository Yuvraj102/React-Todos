import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  handler = (e) => {
    this.props.setText(e.target.value);
  };
  submitTodoHandler = (e) => {
    e.preventDefault();

    this.props.setTodos([
      ...this.props.todos,
      {
        text: this.props.inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    this.props.setText("");
  };
  statusHandler = (e) => {
    this.props.setStatus(e.target.value);
  };
  render() {
    return (
      <div>
        <form>
          <input
            value={this.props.inputText}
            onChange={this.handler}
            type="text"
            className="todo-input"
          />
          <button
            onClick={this.submitTodoHandler}
            className="todo-button"
            type="submit"
          >
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select
              onChange={this.statusHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;


