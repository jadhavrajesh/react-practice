import React, { useState } from "react";

// requirement
// 1. User clicks on count button then it will increment the count
// 2. User hovers on Heading then it will increment the count
// 3. User key-presses inside the input field & it will increment the count

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevState) => setCount(prevState + 1));
  };

  return (
    <div>
      <button onClick={incrementHandler}>clicked {count} times</button>
    </div>
  );
};

const HoverCounter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevState) => setCount(prevState + 1));
  };

  return (
    <div>
      <h1 onMouseOver={incrementHandler}>hovered {count} times</h1>
    </div>
  );
};

export { ClickCounter, HoverCounter };
