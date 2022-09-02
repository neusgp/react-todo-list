import React from "react";
import "../styles/checkbox.css";

import bin from "../public/bin.svg";
import checkon from "../public/checkon.svg";
import checkoff from "../public/checkoff.svg";

export default function Checkbox({ label }) {
    return (
        <div id="checkbox">
            <img src={bin} />
            <img src={checkoff} />
            <p className="label">{label}</p>
        </div>
    );
}
