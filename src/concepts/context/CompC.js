import React, { useContext, createContext } from "react";

const MyName = createContext();
const CompA = () => {
  return (
    <MyName.Provider value={"Rajesh"}>
      <CompB/>
    </MyName.Provider>
  )
}

const CompB = () => {
  return ( 
    <CompC/>
  )
}

const CompC = () => {
  const value = useContext(MyName);
  console.log("value", value)
  return (
    <h1>My name is {value}</h1>
  )
}

export default CompC;