import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setstep] = useState(1);
  const [count, setcount] = useState(2);
  return (
    <div className="main">
      <input
        type="range"
        min={0}
        max={10}
        value={step}
        onChange={(e) => setstep(e.target.value)}
      />
      <span>Step = {step}</span>

      <button value={count} onClick={() => setcount((e) => e - 1)}>
        -
      </button>
      <span>count : {count}</span>
      <button value={count} onClick={() => setcount((e) => e + 1)}>
        +
      </button>
    </div>
  );
}
