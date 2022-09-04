import React from "react";
import { useState } from "react";
import "./styles/app.css";

import TodoList from "./components/todo_list.js";
import AddButton from "./components/add_button.js";
import TodoForm from "./components/todo_form";

const tasks = [
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
        {
            id: 2,
            label: "Task 3",
            checked: false,
        },
    ],
    [
        {
            id: 3,
            label: "Task 4",
            checked: true,
        },
        {
            id: 4,
            label: "Task 5",
            checked: true,
        },
    ],
];

export default function App() {
    const [show, setShow] = useState(false);

    const toggleForm = () => {
        console.log("hi", show);
        if (show === false) {
            setShow(true);
            return;
        }
        setShow(false);
    };

    return (
        <div id="app">
            <TodoList props={{ tasks }} />
            <AddButton openForm={toggleForm} />
            <TodoForm toggleForm={toggleForm} show={show} />
        </div>
    );
}
