import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [showError, setShowError] = useState(false);
  return (
    <div data-test="component-app">
      <p data-test="counter-display">
        The counter is currently
        <span data-test="count">{count}</span>
      </p>
      {showError && (
        <p data-test="error-message" style={{ color: "red" }}>
          Cannot less than 0
        </p>
      )}
      <button
        onClick={() =>
          setCount(() => {
            setShowError(false);
            return count + 1;
          })
        }
        data-test="increment-button"
      >
        Inc
      </button>
      <button
        onClick={() =>
          setCount(() => {
            if (count === 0) {
              setShowError(true);

              return count;
            }
            return count - 1;
          })
        }
        data-test="decrement-button"
      >
        Dec
      </button>
    </div>
  );
}

export default App;
