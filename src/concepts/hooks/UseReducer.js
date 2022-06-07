import React, { useReducer } from "react";

function reducerFunction(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const initialState = { count: 0 };
function Counter() {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: "INC" })}>
          Increment Counter
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "DEC" })}>
          Decrement Counter
        </button>
      </div>
    </>
  );
}

export default Counter;
