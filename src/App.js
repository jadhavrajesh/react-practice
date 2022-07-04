import React from "react";
import "./App.css";
import UseEffect from "./concepts/hooks/UseEffect";
import UseEffectWithCleanup from "./concepts/hooks/UseEffectWithCleanup";
import UseEffectWithAPIcall from "./concepts/hooks/useEffectWithAPIcall";
import UseRef from "./concepts/hooks/UseRef";
import UseContextExample from "./concepts/hooks/UseContext";
import CounterExampleUseReducer from "./concepts/hooks/UseReducer";
import PageWithContextExample from "./advanced-guides/context/PageWithContextExample";
import SuspenseExample from "./advanced-guides/code-splitting/suspense/SuspenseExample";
import ErrorBoundary from "./advanced-guides/error-boundaries/ErrorBoundary";

function App() {
  return (
    <div className="App">
      {/* ------- Hooks -------- */}

      {/* <UseRef/> */}     

      {/* <UseEffect /> */}

      {/* <UseEffectWithCleanup/> */}

      {/* <UseEffectWithAPIcall/> */}

      {/* <CounterExampleUseReducer /> */}

      {/* <UseContextExample /> */}

      {/* ------- Context -------- */}

      <PageWithContextExample/> 

      {/* <SuspenseExample /> */}

      {/* <ErrorBoundary /> */}
    </div>
  );
}

export default App;
