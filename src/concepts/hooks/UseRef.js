import React, { useRef } from "react";

const UseRefExample = () => {
  const nameRef = useRef(null);

  const handleInput = (e) => {
    e.preventDefault();
    nameRef.current.focus();
    console.log(nameRef?.current?.value);
  };

  return (
    <>
      <form>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          ref={nameRef}
          placeholder="Enter your name"
        />
        <button onClick={handleInput}>Click here to focus the input</button>
      </form>
    </>
  );
};

export default UseRefExample;
