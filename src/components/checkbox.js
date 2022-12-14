import React from "react";
import { useState } from "react";
import "../styles/checkbox.css";

import bin from "../public/bin.svg";
import checkon from "../public/checkon.svg";
import checkoff from "../public/checkoff.svg";

export default function Checkbox({
    label,
    checked,
    handleDelete,
    handleChecked,
}) {
    const [remove, setRemove] = useState(false);

    return (
        <div id="checkbox" className={remove ? "fade_out" : "fade_in"}>
            <img
                className="bin_icon"
                src={bin}
                onClick={() => {
                    handleDelete();
                    setRemove(true);
                }}
            />
            {checked ? (
                <>
                    <img
                        className="check_icon"
                        src={checkon}
                        onClick={handleChecked}
                    />
                    <p className="checkbox-checked">{label}</p>
                </>
            ) : (
                <>
                    <img
                        className="check_icon"
                        src={checkoff}
                        onClick={handleChecked}
                    />
                    <p className="label">{label}</p>
                </>
            )}
        </div>
    );
}
