import React, { useCallback, useState } from "react";

// optimize the component - wrap the component inside React.memo()
const Title = React.memo(() => {
  console.log("Rendering Title");
  return (
    <h1>
      useCallback hook example (open the dev-tool & check the console tab)
    </h1>
  );
});

const Count = React.memo(({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <p>
      {text}:{count}
    </p>
  );
});

const Button = React.memo(({ clickHandler, children }) => {
  console.log(`Rendering button - ${children}`);
  return <button onClick={clickHandler}>{children}</button>;
});

const ParentComponent = () => {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(30000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <Title />

      <Count text="Age" count={age} />
      <Button clickHandler={incrementAge}>Increment Age</Button>

      <Count text="Salary" count={salary} />
      <Button clickHandler={incrementSalary}>Increment Salary</Button>
    </>
  );
};
export default ParentComponent;
