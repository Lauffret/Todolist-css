import React, { useState } from "react";
import ReactDOM from "react-dom";
import {v1 as uuid} from "uuid";

const Todolist = () => {
    const [todos, setTodos] = useState([
        { id: uuid(), task: "tâche 1", completed: false },
        { id: uuid(), task: "tâche 2", completed: true },
        { id: uuid(), task: "tâche 3", completed: false }
      ]);
    
      return (
        <div className="TodoList">
          <h1>
            Todo List
          </h1>
        </div>
      );
};

export default Todolist;