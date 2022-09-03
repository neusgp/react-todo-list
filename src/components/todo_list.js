import React from "react";
import { useState } from "react";
import "../styles/todo_list.css";

import Checkbox from "./checkbox.js";

export default function TodoList({ props }) {
    const [tasks, setTasks] = useState(props.tasks);

    console.log("tasks", tasks);

    const handleDelete = (id) => {
        let newArr = [];
        for (let i = 0; i < tasks.length; i++) {
            const newTasks = tasks[i].filter((task) => task.id !== id);
            newArr.push(newTasks);
        }
        setTasks(newArr);
    };

    const toggleChecked = (id) => {
        let newArr = [];
        for (let i = 0; i < tasks.length; i++) {
            const newTasks = tasks[i].map((task) => {
                if (task.id === id) {
                    task.checked = !task.checked;
                    return task;
                }
                return task;
            });
            newArr.push(newTasks);
        }

        let checkedTask;

        for (let i = 0; i < newArr.length; i++) {
            const filteredArr = newArr[i].filter((task) => task.id === id);

            if (filteredArr[0]) {
                checkedTask = filteredArr[0];
            }
            const emptiedArr = newArr[i].filter((task) => task.id !== id);
            newArr[i] = emptiedArr;
        }

        if (checkedTask.checked === true) {
            newArr[1] = [checkedTask, ...newArr[1]];
        } else if (checkedTask.checked === false) {
            newArr[0] = [checkedTask, ...newArr[0]];
        }
        setTasks(newArr);
    };

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
