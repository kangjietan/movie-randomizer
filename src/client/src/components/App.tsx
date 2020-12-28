import React, { useState } from "react";

export const App = () => {
  const [state, setState] = useState({ counter: 0 });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => setState({ counter: (state.counter += 1) })}
        style={{ padding: "5rem" }}
      >
        Test
      </button>
    </div>
  );
};
