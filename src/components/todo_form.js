import React from "react";

import "../styles/todo_form.css";

import SaveButton from "./save_button.js";

export default function TodoForm({ toggleForm }) {
    return (
        <div id="todo_form" /* className="hide_form" */>
            <div className="modal">
                <textarea
                    className="label"
                    placeholder="Inserisci voce"
                ></textarea>
                <SaveButton toggleForm={toggleForm} />
            </div>
        </div>
    );
}
