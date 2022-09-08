import React from "react";
import { useRef, useState, useEffect } from "react";

import "../styles/todo_form.css";

import SaveButton from "./save_button.js";

export default function TodoForm({ show, addNewTask, toggleForm }) {
    const [newTask, setNewTask] = useState("");
    const [textarea, setTextArea] = useState(null);
    const ref = useRef(null);

    const clearTask = () => {
        setTimeout(() => {
            textarea.value = "";
        }, 1000);
        setNewTask("");
    };

    useEffect(() => {
        setTextArea(ref.current);
    });

    return (
        <>
            <div
                id="background"
                className={show ? "show_form" : "hide_form"}
                onClick={toggleForm}
            ></div>
            <div id="todo_form" className={show ? "show_modal" : "hide_modal"}>
                <textarea
                    ref={ref}
                    id="textarea"
                    className="label"
                    placeholder="Inserisci voce"
                    onChange={(e) => setNewTask(e.target.value)}
                ></textarea>
                <SaveButton
                    addNewTask={addNewTask}
                    newTask={newTask}
                    clearTask={clearTask}
                />
            </div>
        </>
    );
}
