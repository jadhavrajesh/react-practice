import React, { useState } from "react";
import "./App.css";
import HandlingEvents from "./main-concepts/handling-events/HandlingEvents";
import UseEffect from "./concepts/hooks/UseEffect";
import UseEffectWithCleanup from "./concepts/hooks/UseEffectWithCleanup";
import UseEffectWithAPIcall from "./concepts/hooks/useEffectWithAPIcall";
import UseRef from "./concepts/hooks/UseRef";
import UseContextExample from "./concepts/hooks/UseContext";
import CounterExampleUseReducer from "./concepts/hooks/UseReducer";
import PageWithContextExample from "./advanced-guides/context/PageWithContextExample";
import SuspenseExample from "./advanced-guides/code-splitting/suspense/SuspenseExample";
import ErrorBoundary from "./advanced-guides/error-boundaries/ErrorBoundary";
import PureComponentNotWorks from "./api-reference/PureComponent/PureComponentNotWorks/Example";
import WithoutHOCCounter from "./advanced-guides/hoc/couter-example/WithoutHOCExample";
import WithHOCCounter from "./advanced-guides/hoc/couter-example/WithHOCExample";
import WithoutHOCSearch from "./advanced-guides/hoc/search-input-example/WithoutHOC/Container";
import WithHOCSearch from "./advanced-guides/hoc/search-input-example/WithHOC/Container";
import ProfilerExample from "./advanced-guides/profiler/ProfilerExample";
import PortalsExample from "./advanced-guides/portals/PortalsExample";
import WithoutPortalModal from "./advanced-guides/portals/WithoutPortalModal";
import WithPortalModal from "./advanced-guides/portals/WithPortalModal";
import WithoutUseCallback from "./concepts/hooks/useCallback/WithoutUseCallback";
import WithUseCallback from "./concepts/hooks/useCallback/WithUseCallback";

function App() {
  return (
    <div className="App">
      {/* <HandlingEvents /> */}

      {/* ------- Hooks -------- */}
      {/* <UseRef /> */}

      {/* <UseEffect /> */}

      {/* <UseEffectWithCleanup /> */}

      {/* <UseEffectWithAPIcall/> */}

      {/* <CounterExampleUseReducer /> */}

      {/* <UseContextExample /> */}

      {/* <WithoutUseCallback/> */}

      {/* <WithUseCallback /> */}

      {/* ------- Context -------- */}
      {/* <PageWithContextExample/>  */}

      {/* <SuspenseExample /> */}

      {/* <ErrorBoundary /> */}

      {/* --------- PureComponent --------- */}
      {/* <PureComponentNotWorks />       */}

      {/* --------- HOC Examples - START --------- */}
      {/* ---------  Without HOC Counter --------- */}
      {/* <WithoutHOCCounter /> */}

      {/* --------- With HOC Counter --------- */}
      {/* <WithHOCCounter /> */}

      {/* <WithoutHOCSearch /> */}
      <WithHOCSearch />
      {/* --------- HOC Examples - END --------- */}

      {/* --------- Profiler API  --------- */}
      {/* <ProfilerExample /> */}

      {/* --------- Portals  --------- */}
      {/* <PortalsExample /> */}
      {/* <WithoutPortalModal /> */}
      {/* <WithPortalModal /> */}
    </div>
  );
}

export default App;
