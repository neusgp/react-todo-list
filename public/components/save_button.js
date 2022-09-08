import React from "react";
import "../styles/save_button.css";

export default function SaveButton({ addNewTask, newTask, clearTask }) {
    return (
        <div
            id="save_button"
            className="button"
            onClick={() => {
                addNewTask(newTask);
                clearTask();
            }}
        >
            <p className="label_medium">Salva</p>
        </div>
    );
}
