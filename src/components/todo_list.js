import React from "react";
import { useState } from "react";
import "../styles/todo_list.css";

import Checkbox from "./checkbox.js";
import AddButton from "./add_button.js";
import TodoForm from "./todo_form";

export default function TodoList({ tasksTemplate, firstNewId }) {
    const [tasks, setTasks] = useState(tasksTemplate);
    const [id, setId] = useState(() => firstNewId(tasks));
    const [show, setShow] = useState(false);

    const openForm = () => {
        setShow(true);
    };

    const addNewTask = (task) => {
        if (task) {
            console.log("hi");
            const newTask = {
                id: id,
                label: task,
                checked: false,
            };

            tasks[0].push(newTask);
            setShow(false);
            setId(id + 1);
        }
    };

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
        <>
            <div id="todo_list" className="transition">
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
            <AddButton openForm={openForm} />
            <TodoForm show={show} addNewTask={addNewTask} />
        </>
    );
}
