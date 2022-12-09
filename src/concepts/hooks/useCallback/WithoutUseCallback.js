import React, { useState } from "react";

const Title = () => {
  console.log("Rendering Title");
  return (
    <h1>
      Without useCallback hook example (open the dev-tool & check the console
      tab)
    </h1>
  );
};

const Count = ({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <p>
      {text}:{count}
    </p>
  );
};

const Button = ({ handleClick, children }) => {
  console.log(`Rendering button - ${children}`);
  return <button onClick={handleClick}>{children}</button>;
};

const ParentComponent = () => {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(30000);

  const handleIncrementAge = () => {
    setAge(age + 1);
  };

  const handleIncrementSalary = () => {
    setSalary(salary + 1000);
  };

  return (
    <>
      <Title />

      <Count text="Age" count={age} />
      <Button handleClick={handleIncrementAge}>Increment Age</Button>

      <Count text="Salary" count={salary} />
      <Button handleClick={handleIncrementSalary}>Increment Salary</Button>
    </>
  );
};
export default ParentComponent;
