import React from "react";

import "../styles/todo_form.css";

import SaveButton from "./save_button.js";

export default function TodoForm({ props }) {
    return (
        <div id="todo_form" /* className="hide_form" */>
            <div className="modal">
                <textarea
                    className="label"
                    placeholder="Inserisci voce"
                ></textarea>
                <SaveButton />
            </div>
        </div>
    );
}
