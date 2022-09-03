import React from "react";
import { useState } from "react";
import "../styles/todo_list.css";

import Checkbox from "./checkbox.js";

export default function TodoList({ props }) {
    const [todos, setTodos] = useState(props.todos);
    const [done, setDone] = useState(props.done);

    const getTask = (id) => {
        const filteredArr = todos.filter((x) => x.id === id);
        return filteredArr[0];
    };

    const toggleChecked = (id) => {
        const newTodos = todos.filter((x) => {
            if (x.id === id) {
                x.checked = !x.checked;
                return x;
            }
            return x;
        });
        setTodos(newTodos);
    };
    /*  const task = getTask(id);
        console.log(task);

        if (task.id) {
            task.checked = false;
            const newDone = done.unshift(task);
            setDone(newDone);
            return;
        }
        task.checked = true;
        const newTodos = todos.unshift(task);
        setTodos(newTodos);
        return;
    }; */

    const handleDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div id="todo_list">
            <h1>To-Do List</h1>
            <div className="todo_list_content">
                {todos.map((item) => (
                    <Checkbox
                        key={item.id}
                        label={item.label}
                        checked={item.checked}
                        handleChecked={() => toggleChecked(item.id)}
                        handleDelete={() => handleDelete(item.id)}
                    />
                ))}
            </div>
        </div>
    );
}
