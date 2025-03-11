import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count is state, setCount updates it

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
