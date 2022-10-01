import React from "react";
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
import {
  ClickCounter,
  HoverCounter,
} from "./advanced-guides/hoc/couter-example/WithoutHOCExample";
import {
  ClickCounterHOC,
  HoverCounterHOC,
} from "./advanced-guides/hoc/couter-example/WithHOCExample";
import ProfilerExample from "./advanced-guides/profiler/ProfilerExample";
import PortalsExample from "./advanced-guides/portals/PortalsExample";
import WithoutPortalModal from "./advanced-guides/portals/WithoutPortalModal";
import WithPortalModal from "./advanced-guides/portals/WithPortalModal";

function App() {
  return (
    <div className="App">
      {/* <HandlingEvents /> */}

      {/* ------- Hooks -------- */}
      {/* <UseRef/>      */}

      {/* <UseEffect /> */}

      {/* <UseEffectWithCleanup/> */}

      {/* <UseEffectWithAPIcall/> */}

      {/* <CounterExampleUseReducer /> */}

      {/* <UseContextExample /> */}

      {/* ------- Context -------- */}
      {/* <PageWithContextExample/>  */}

      {/* <SuspenseExample /> */}

      {/* <ErrorBoundary /> */}

      {/* --------- PureComponent --------- */}
      {/* <PureComponentNotWorks />       */}

      {/* --------- Without HOC  --------- */}
      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* --------- With HOC  --------- */}

      {/* <ClickCounterHOC name={"Rajesh"} />
      <HoverCounterHOC name={"Rajesh"} /> */}

      {/* --------- Profiler API  --------- */}
      {/* <ProfilerExample /> */}

      {/* --------- Portals  --------- */}
      {/* <PortalsExample /> */}
      
      <WithoutPortalModal/>
      {/* <WithPortalModal/> */}
    </div>
  );
}

export default App;
