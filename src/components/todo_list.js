import React from "react";
import { useState } from "react";
import "../styles/todo_list.css";

import Checkbox from "./checkbox.js";

export default function TodoList({ props }) {
    const [tasks, setTasks] = useState(props.tasks);
    const [todos, setTodos] = useState(props.tasks[0]);
    const [done, setDone] = useState(props.tasks[1]);

    const getTask = (id, arr) => {
        const filteredArr = arr.filter((x) => x.id === id);
        return filteredArr[0];
    };

    /* const removeTask = (id, arr) => {
        const newTodos = arr.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    }; */

    console.log("tasks", tasks, "todos", todos, "done", done);

    const handleDelete = (id) => {
        let newArr = [];
        for (let i = 0; i < tasks.length; i++) {
            const newTasks = tasks[i].filter((task) => task.id !== id);
            newArr.push(newTasks);
        }
        console.log("new array", arr);
        setTasks(newArr);
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

    return (
        <div id="todo_list">
            <h1>To-Do List</h1>
            <div className="todo_list_content">
                {tasks.map((index) =>
                    index.map((task) => (
                        <Checkbox
                            key={task.id}
                            label={task.label}
                            checked={task.checked}
                            handleChecked={() => toggleChecked(task.id)}
                            handleDelete={() => handleDelete(task.id)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
