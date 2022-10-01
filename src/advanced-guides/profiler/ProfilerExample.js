import React, { Profiler } from "react";

const AnotherComponent = () => {
  return <h1>I am AnotherComponent</h1>;
};

const ProfilerExample = () => {
  const onRenderCallback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    // Aggregate or log render timings...
    console.log(
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions
    );
  };

  return (
    <Profiler id="AnotherComponent" onRender={onRenderCallback}>
      <AnotherComponent />
    </Profiler>
  );
};

export default ProfilerExample;
