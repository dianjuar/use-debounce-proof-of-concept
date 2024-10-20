import React, { useEffect, useRef, useState } from "react";
import { useThrottledCallback } from "use-debounce";

export function ThrottledCallback() {
  const [value, setValue] = useState();
  const scrollContainer = useRef(null);

  const updatePosition = () => {
    if (scrollContainer.current) {
      setValue(scrollContainer.current.scrollTop);
    }
  };

  const scrollHandler = useThrottledCallback(updatePosition, 100);

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener("scroll", scrollHandler);
      return () => {
        container.removeEventListener("scroll", scrollHandler);
      };
    }
  }, [scrollHandler]);

  return (
    <>
      <p>Scroll position: {value}</p>
      <div
        ref={scrollContainer}
        style={{ backgroundColor: "red", height: "200px", overflow: "auto" }}
      >
        <div style={{ height: "200vh" }}></div>
      </div>
    </>
  );
}
