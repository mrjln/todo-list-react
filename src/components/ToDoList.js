import React from "react";
import { ToDoItem } from "./ToDoItem.js";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDoItems: [ {id: 1, title:'pizza eten'}, {id: 2, title:'react leren'}] };
  }
  render() {
    return (
      <div className="todo-list">
        <h1> Dingen die ik nog moet doen:</h1>
        <ul>
          {this.state.toDoItems.map(todo=> (
             <ToDoItem title={todo.title}/>
          ))}
        </ul>
      </div>
    );
  }
}
