import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ label }) => {
    return (
        <div className="container" style={{ margin: '10px', marginLeft: '32px' }}>
            {label}{" : "}
            <div className="toggle-switch" style={{ marginLeft: '32px' }}>
                <input type="checkbox" className="checkbox"
                    name={label} id={label} />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch;