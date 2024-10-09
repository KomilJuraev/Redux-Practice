import { useSelector, useDispatch } from "react-redux";

import { decrement, increment, increaseBy } from "./store/counterSlice";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.count);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter - Using - Redux</h2>
      </header>
      <div className="app-body">
        <div className="top-section">
          <button className="subtract-btn" onClick={() => dispatch(decrement())}>-</button>
          <h3 className="count">{counter}</h3>
          <button className="add-btn" onClick={() => dispatch(increment())}>+</button>
        </div>
        <div className="bottom-section">
          <button onClick={() => dispatch(increaseBy(10))}>Add 10</button>
        </div>
      </div>
    </div>
  );
}

export default App;
