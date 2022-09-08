import React from "react";
import { useRef, useState } from "react";
import "../styles/checkbox.css";

import bin from "../media/bin.svg";
import checkon from "../media/checkon.svg";
import checkoff from "../media/checkoff.svg";

export default function Checkbox({
    label,
    checked,
    handleDelete,
    handleChecked,
}) {
    const [remove, setRemove] = useState(false);
    /* const removedTask = useRef(null); */

    return (
        <div
            id="checkbox"
            /* ref={removedTask} */ className={remove ? "fade_out" : "fade_in"}
        >
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
