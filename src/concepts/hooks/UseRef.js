import React, { useRef } from "react";

const UseRefExample = () => {
  const nameRef = useRef(null);
  
  const focusInput = (e) => {
    e.preventDefault();    
    nameRef.current.focus();
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
        <button onClick={focusInput}>Click here to focus the input</button>        
      </form>
    </>
  );
};

export default UseRefExample;
