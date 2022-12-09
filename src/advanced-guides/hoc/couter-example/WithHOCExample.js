import React, { useState } from "react";

const ClickCounter = ({ name, count, handleIncrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>
        {name} clicked {count} times
      </button>
    </div>
  );
};

const HoverCounter = ({ name, count, handleIncrement }) => {
  return (
    <div>
      <p onMouseOver={handleIncrement}>
        {name} hovered {count} times
      </p>
    </div>
  );
};

// this is Counter HOC
const withCounterHOC = (WrappedComponent, incrementBy) => {
  // create new Component here
  const WithCounter = (props) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount((prevState) => prevState + incrementBy);
    };
    return (
      <WrappedComponent
        count={count}
        handleIncrement={handleIncrement}
        {...props}
      />
    );
  };
  // return new component
  return WithCounter;
};

const ClickCounterHOC = withCounterHOC(ClickCounter, 1);
const HoverCounterHOC = withCounterHOC(HoverCounter, 1);

function CounterContainer() {
  return (
    <>
      <ClickCounterHOC name="ClickCounterHOC" />
      <HoverCounterHOC name="HoverCounterHOC" />
    </>
  );
}

export default CounterContainer;
