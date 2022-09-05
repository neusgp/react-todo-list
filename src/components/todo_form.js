import React from "react";
import { useRef, useState, useEffect } from "react";

import "../styles/todo_form.css";

import SaveButton from "./save_button.js";

export default function TodoForm({ show, addNewTask }) {
    const [newTask, setNewTask] = useState("");
    const ref = useRef(null);

    const clearTask = () => {
        textarea.value = "";
    };

    useEffect(() => {
        const textarea = ref.current;
        console.log(textarea);
    });

    return (
        <div id="todo_form" className={show ? "show_form" : "hide_form"}>
            <div id="modal" className={show ? "show_modal" : "hide_modal"}>
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
        </div>
    );
}
