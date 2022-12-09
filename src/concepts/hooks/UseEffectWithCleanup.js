import React, { useEffect, useState } from "react";

const UseEffectWithCleanup = () => {
  const [width, setWidth] = useState(window.screen.width);

  const getWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWidth);

    return () => {      
      window.removeEventListener("resize", getWidth);
    };
  });

  return <h1>width: {width}</h1>;
};

export default UseEffectWithCleanup;
