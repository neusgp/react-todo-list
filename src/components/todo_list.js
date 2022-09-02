import React from "react";
import "../styles/todo_list.css";

import Checkbox from "./checkbox.js";

export default function TodoList({ todos }) {
    return (
        <div id="todo_list">
            <h1>To-Do List</h1>
            <div className="todo_list_content">
                {todos.map((item) => (
                    <Checkbox
                        key={item.id}
                        label={item.label}
                        checked={item.checked}
                    />
                ))}
            </div>
        </div>
    );
}
