import React, { Component } from "react";
class Todos extends Component {
  state = { newtodo: "", todolist: [] };
  doSubmit = () => {
    const newtodo = { key: 1 + Math.random(), value: this.state.newtodo };
    const todolist = [...this.state.todolist];
    todolist.push(newtodo);
    this.setState({ todolist, newtodo: "" });
  };
  handleChange = (e) => {
    this.setState({ newtodo: e.target.value });
  };
  deleteItem(key) {
    // copy current list of items
    const list = [...this.state.todolist];
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.key !== key);
    console.log(updatedList);
    this.setState({ todolist: updatedList });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="newtodo"
          value={this.state.newtodo}
          onChange={this.handleChange}
        ></input>
        <button onClick={() => this.doSubmit()}>Add</button>
        <ul>
          {this.state.todolist.map((list) => (
            <li key={list.key}>
              {list.value}
              <button onClick={() => this.deleteItem(list.key)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
