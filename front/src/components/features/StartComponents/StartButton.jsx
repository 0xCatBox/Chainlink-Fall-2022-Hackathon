import React from "react";
import { Link } from "react-router-dom";

const StartButton = ({ handleMode }) => {
    console.log("StartButton");

    return (
        // <Link >
        <div className="ButtonClick">
            <button className="StartButton" onClick={() => handleMode("start02")}>START</button>
        </div>
        // </Link>
    )
}

export default StartButton;