import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect called')
    document.title = `Count ${count >= 1 ? count : ''}`
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </>
  )
}

export default UseEffect;