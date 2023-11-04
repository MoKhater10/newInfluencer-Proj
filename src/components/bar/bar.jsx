import React from "react";
import "./bar.css";

const Bar = ({ color, width, text }) => {
  return (
    <div className="bar d-flex flex-column gap-2">
      <p>{text}</p>
      <div className="background">
        <div
          className="fill"
          style={{ backgroundColor: color, width: width }}
        ></div>
      </div>
    </div>
  );
};

export default Bar;
