import React, { useState } from "react";

// Scenario
// 1. User clicks on count button then it will increment the count
// 2. User hovers on Heading then it will increment the count
// 3. User key-presses inside the input field & it will increment the count (not implementd in this example)

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => setCount(prevState + 1));
  };

  return (
    <div>
      <button onClick={handleIncrement}>clicked {count} times</button>
    </div>
  );
};

const HoverCounter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevState) => setCount(prevState + 1));
  };

  return (
    <div>
      <p onMouseOver={handleIncrement}>hovered {count} times</p>
    </div>
  );
};

function CounterContainer() {
  return (
    <>
      <ClickCounter />
      <HoverCounter />
    </>
  );
}

export default CounterContainer;
