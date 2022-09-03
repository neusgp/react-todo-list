import React from "react";
import "../styles/add_button.css";
import add from "../public/adds.svg";

export default function AddButton({ openForm }) {
    return (
        <div id="add_button" className="button" onClick={openForm}>
            <img className="add_icon" src={add} />
            <p className="label_medium">Nuova Voce</p>
        </div>
    );
}
