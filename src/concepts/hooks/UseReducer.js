import React, { useReducer } from 'react';

const initialValue = 0;

const reducerFunc = (state, action) => {
  if (action.type === "INC") {
    state += 1;
  }
  if (action.type === "DEC") {
    state -= 1;
  }
  return state
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialValue)

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => { dispatch({ type: "INC" }) }}>Increment</button>
      <button onClick={() => { dispatch({ type: "DEC" }) }}>Decrement</button>
    </div>
  )
}

export default UseReducer;
