import React from "react";
import "./styles/app.css";

import TodoList from "./components/todo_list.js";
import AddButton from "./components/add_button.js";
import TodoForm from "./components/todo_form";

const todos = [
    {
        id: 0,
        label: "Cuccinare il ragú.",
        checked: false,
    },
    {
        id: 1,
        label: "Mangiare un aranccione",
        checked: false,
    },
    {
        id: 2,
        label: "Cantare un'aria.",
        checked: false,
    },
];

export default function App() {
    return (
        <div id="app">
            <TodoList todos={todos} />
            <AddButton />
            {/* <TodoForm /> */}
        </div>
    );
}
