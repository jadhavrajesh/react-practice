import React, { createContext } from "react";
import CompB from "./CompB";

const MyName = createContext();

const CompA = () => {
  return (
    <MyName.Provider value={"Rajesh"}>
      <CompB/>
    </MyName.Provider>
  )
}

export default CompA;
export { MyName };