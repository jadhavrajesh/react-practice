import React, { useState } from "react";

const ClickCounter = ({ name, count, incrementHandler }) => {
  return (
    <div>
      <button onClick={incrementHandler}>
        {name} clicked {count} times
      </button>
    </div>
  );
};

const HoverCounter = ({ name, count, incrementHandler }) => {
  return (
    <div>
      <h1 onMouseOver={incrementHandler}>
        {name} hovered {count} times
      </h1>
    </div>
  );
};

// this is Counter HOC
const withCounter = (WrappedComponent, incrementNumber) => {
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);
    const incrementHandler = () => {
      setCount((prevState) => prevState + incrementNumber);
    };
    return (
      <WrappedComponent
        count={count}
        incrementHandler={incrementHandler}
        {...props}
      />
    );
  };
  return WithCounter;
};

const ClickCounterHOC = withCounter(ClickCounter, 5);
const HoverCounterHOC = withCounter(HoverCounter, 10);

export { ClickCounterHOC, HoverCounterHOC };
