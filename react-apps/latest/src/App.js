import React from "react";

import { ValueDebouncingExample } from "./useDebounceExamples/value";
import { CallbackDebounceExample } from "./useDebounceExamples/callback";
import { ThrottledCallback } from "./useDebounceExamples/throttled-callback";

import "./App.css";

function App() {
  return (
    <>
      <h1>
        <code>useDebounce</code> examples
      </h1>

      <div>
        <div className="center">
          <h2>Value Debouncing</h2>
          <ValueDebouncingExample />
        </div>
        <div className="center">
          <h2>Callback Debouncing</h2>
          <CallbackDebounceExample />
        </div>
        <div className="center">
          <h2>Scroll to see the throttled callback in action</h2>
          <ThrottledCallback />
        </div>
      </div>
    </>
  );
}

export default App;
