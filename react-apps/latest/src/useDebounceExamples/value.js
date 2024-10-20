import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function ValueDebouncingExample() {
  const defaultValue = "";
  const [value, setValue] = useState(defaultValue);

  const debounced = useDebouncedCallback((value) => {
    setValue(value);
  }, 1000);

  // you should use `e => debounced(e.target.value)` as react works with synthetic events
  return (
    <div>
      <input
        defaultValue={defaultValue}
        onChange={(e) => debounced(e.target.value)}
      />
      <p>Debounced value: {value}</p>
    </div>
  );
}
