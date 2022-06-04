import React, { useRef, useState } from "react";

const UseRef = () => {
  const nameRef = useRef(null)
  const [show, setShow] = useState(false)

  const submitForm = (e) => {
    e.preventDefault();
    
    const name = nameRef.current.value

    if (name === "") {
      alert("please fill the details")
      setShow(false)
    }
    else {
      setShow(true)
    }
  }

  return (
    <>
      <form onSubmit={submitForm}>
      
        <label htmlFor="name"></label>
        <input type="text" name="name" ref={nameRef} />
        
        <button>Submit</button>

      </form>

      <p>{show ? nameRef.current.value : ""}</p>
    </>
  )
}

export default UseRef;