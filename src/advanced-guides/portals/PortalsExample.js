import React from "react";
import ReactDOM from "react-dom";

const Comp = () => {
  return (
    <>
      <h1>I am inside Portal</h1>
      <p>
        Open Elements tab in Inspect & check this text is rendered in new div
        (not in the root div){" "}
      </p>
    </>
  );
};

const PortalsExample = () => {
  return ReactDOM.createPortal(
    // Comp,
    <>
      <h1>I am inside Portal</h1>
      <p>
        Open Elements tab in Inspect & check this text is rendered in new div
        (not in the root div){" "}
      </p>
    </>,
    document.getElementById("portal-root")
  );
};

export default PortalsExample;
