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

const Button = ({ clickHandler, children }) => {
  console.log(`Rendering button - ${children}`);
  return <button onClick={clickHandler}>{children}</button>;
};

const ParentComponent = () => {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(30000);

  const incrementAge = () => {
    setAge(age + 1);
  };

  const incrementSalary = () => {
    setSalary(salary + 1000);
  };

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
