import React from "react";

import "../styles/todo_form.css";

import SaveButton from "./save_button.js";

export default function TodoForm({ toggleForm, show }) {
    console.log(show);
    return (
        <div id="todo_form" className={show ? "show_form" : "hide_form"}>
            <div id="modal" className={show ? "show_modal" : "hide_modal"}>
                <textarea
                    className="label"
                    placeholder="Inserisci voce"
                ></textarea>
                <SaveButton toggleForm={toggleForm} />
            </div>
        </div>
    );
}
