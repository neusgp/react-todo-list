import React from "react";
import "./styles/app.css";

import TodoList from "./components/todo_list.js";

const tasksTemplate = [
    [
        {
            id: 0,
            label: "Task 1",
            checked: false,
        },
        {
            id: 1,
            label: "Task 2",
            checked: false,
        },
    ],
    [
        {
            id: 2,
            label: "Task 3",
            checked: true,
        },
        {
            id: 3,
            label: "Task 4",
            checked: true,
        },
    ],
];

const firstNewId = (tasks) => {
    let count = 0;
    for (let i = 0; i < tasks.length; i++) {
        count += tasks[i].length;
    }
    return ++count;
};

export default function App() {
    return (
        <div id="app">
            <TodoList tasksTemplate={tasksTemplate} firstNewId={firstNewId} />
        </div>
    );
}
