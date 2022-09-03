import React from "react";
import "./styles/app.css";

import TodoList from "./components/todo_list.js";
import AddButton from "./components/add_button.js";
import TodoForm from "./components/todo_form";

const todos = [
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
];

export default function App() {
    return (
        <div id="app">
            <TodoList todos={todos} />
            <AddButton />
            <TodoForm />
        </div>
    );
}
