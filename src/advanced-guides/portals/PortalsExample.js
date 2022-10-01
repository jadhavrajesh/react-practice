import React from "react";
import ReactDOM from "react-dom";

const PortalsExample = () => {
  return ReactDOM.createPortal(
    <h1>I am inside Portal</h1>,
    document.getElementById("portal-root")
  );
};

export default PortalsExample;
