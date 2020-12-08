import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div data-test="component-app">
      <p data-test="counter-display">
        The counter is currently
        <span data-test="count">{count}</span>
      </p>
      <button
        onClick={() => setCount(() => count + 1)}
        data-test="increment-button"
      ></button>
    </div>
  );
}

export default App;
