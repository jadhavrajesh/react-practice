import React, { Suspense } from "react";

// this component is loaded dynamically
const OtherComponent = React.lazy(() => {
  // dynamic import
  return import("./OtherComponent");
});

function SuspenseExample() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <OtherComponent />
    </Suspense>
  );
}

export default SuspenseExample;
