import React from "react";
import "./App.css";
import UseEffect from "./concepts/hooks/UseEffect";
import UseEffectWithCleanup from "./concepts/hooks/UseEffectWithCleanup";
import UseEffectWithAPIcall from "./concepts/hooks/useEffectWithAPIcall";
import UseRef from "./concepts/hooks/UseRef";
import CounterExampleUseReducer from "./concepts/hooks/UseReducer";
import PageWithContextExample from "./advanced-guides/context/PageWithContextExample";
import SuspenseExample from "./advanced-guides/code-splitting/suspense/SuspenseExample";

function App() {
  return (
    <div className="App">
      {/* <UseRef/> */}

      {/* <CompA/> */}

      {/* Hooks */}

      {/* <UseEffect /> */}

      {/* <UseEffectWithCleanup/> */}

      {/* <UseEffectWithAPIcall/> */}

      <CounterExampleUseReducer/>
      
      {/* Context */}

      {/* <PageWithContextExample/>  */}

      {/* <SuspenseExample /> */}
      
    </div>
  );
}

export default App;
