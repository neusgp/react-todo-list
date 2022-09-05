import React, { useEffect } from "react";
import { useState } from "react";

import "../styles/todo_form.css";

import SaveButton from "./save_button.js";

export default function TodoForm({ show, addNewTask }) {
    const [newTask, setNewTask] = useState("");

    return (
        <div id="todo_form" className={show ? "show_form" : "hide_form"}>
            <div id="modal" className={show ? "show_modal" : "hide_modal"}>
                <textarea
                    className="label"
                    placeholder="Inserisci voce"
                    onChange={(e) => setNewTask(e.target.value)}
                ></textarea>
                <SaveButton addNewTask={addNewTask} newTask={newTask} />
            </div>
        </div>
    );
}
