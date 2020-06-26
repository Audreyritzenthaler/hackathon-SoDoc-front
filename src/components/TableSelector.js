import React from "react";

const TabSelector = (props) =>{
    return (
      <div className="TabSelector">
        <button
          id="patient"
          onClick={props.handleChangeTab}
          className={props.activeId === "patient" ? "active" : ""}
        >
          Patient
        </button>
        <button
          id="practitioner"
          onClick={props.handleChangeTab}
          className={props.activeId === "practitioner" ? "active" : ""}
        >
          Practitioner
        </button>
      </div>
    )
}

export default TabSelector;