import React from "react";
import "../styles/save_button.css";

export default function SaveButton({ toggleForm }) {
    return (
        <div id="save_button" className="button" onClick={toggleForm}>
            <p className="label_medium">Salva</p>
        </div>
    );
}
