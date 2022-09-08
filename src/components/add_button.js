import React from "react";
import "../styles/add_button.css";
import add from "../public/adds.svg";

export default function AddButton({ toggleForm }) {
    return (
        <div id="add_button" className="button" onClick={toggleForm}>
            <img className="add_icon" src={add} />
            <p className="label_medium">Nuova Voce</p>
        </div>
    );
}
