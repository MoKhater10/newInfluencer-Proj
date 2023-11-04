import React from "react";
import "./title.css";

const Title = ({ color, text }) => {
  return (
    <div className="title container py-5 ">
      <h1 style={{color:color}}>{text}</h1>
    </div>
  );
};

export default Title;
