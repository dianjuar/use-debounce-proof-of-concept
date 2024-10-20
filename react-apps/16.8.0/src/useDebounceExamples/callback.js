import React, { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function CallbackDebounceExample({ defaultValue }) {
  const [value, setValue] = useState(defaultValue);
  const debounced = useDebouncedCallback((value) => {
    setValue(value);
  }, 1000);

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
