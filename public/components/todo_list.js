import React from "react";
import { useState, useRef, useEffect } from "react";
import "../styles/todo_list.css";

import Checkbox from "./checkbox.js";
import AddButton from "./add_button.js";
import TodoForm from "./todo_form";

export default function TodoList({ tasksTemplate, firstNewId }) {
    const [tasks, setTasks] = useState(tasksTemplate);
    const [id, setId] = useState(() => firstNewId(tasks));
    const [show, setShow] = useState(false);
    const [listHeight, setListHeight] = useState(0);
    const [taskHeight, setTaskHeight] = useState(0);
    const [style, setStyle] = useState();

    const taskList = useRef(null);
    const taskUnit = useRef(null);

    const toggleForm = () => {
        setShow(!show);
    };

    const addNewTask = (task) => {
        if (task) {
            const newTask = {
                id: id,
                label: task,
                checked: false,
            };

            tasks[0].push(newTask);
            setShow(false);
            setId(id + 1);

            setStyle({
                height: listHeight + taskHeight,
                transition: "height 0.3s",
            });
            setListHeight(listHeight + taskHeight);
        }
    };

    const handleDelete = (id) => {
        setTimeout(() => {
            let newArr = [];
            for (let i = 0; i < tasks.length; i++) {
                const newTasks = tasks[i].filter((task) => task.id !== id);
                newArr.push(newTasks);
            }
            setTasks(newArr);
            setStyle({
                height: listHeight - taskHeight,
                transition: "height 0.5s",
            });
        }, 300);

        setListHeight(listHeight - taskHeight);
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

    useEffect(() => {
        setListHeight(taskList.current.clientHeight);
        setTaskHeight(taskUnit.current.clientHeight);
    }, []);

    console.log(listHeight, taskHeight, style);

    return (
        <>
            <div
                id="todo_list"
                className="transition"
                ref={taskList}
                style={style}
            >
                <h1>To-Do List</h1>
                <div className="todo_list_content">
                    {tasks.map((index) =>
                        index.map((task) => (
                            <div ref={taskUnit} key={task.id}>
                                <Checkbox
                                    label={task.label}
                                    checked={task.checked}
                                    handleChecked={() => toggleChecked(task.id)}
                                    handleDelete={() => handleDelete(task.id)}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
            <AddButton toggleForm={toggleForm} />
            <TodoForm
                show={show}
                addNewTask={addNewTask}
                toggleForm={toggleForm}
            />
        </>
    );
}
