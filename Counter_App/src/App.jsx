import React, { useState } from "react";
import "./App.css";

const App = () => {
  // In React, we don’t directly change variables to update the UI. React uses its own "state system" to keep track of UI changes. So instead of 'let counter = 5', we’ll later use useState hook for this.

  let [counter, setCounter] = useState(5);

  // const updateVal = () => {
  //   // Directly updating normal variables like counter = counter + 5; won’t re-render the component or show changes on the screen.
  //   // Because React re-renders the UI only when its "state" changes. That’s why we’ll use React state to make UI reactive.
  //   // console.log(counter);
  //   // counter += 5; // This will NOT update UI, only change variable in memory.
  // };

  const addVal = () => {
    setCounter((counter += 5));
  };

  const removeVal = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 5);
  };

  // let counter = 5; This line defines a normal JS variable — React won’t track it, Instead, we’ll later define it like:
  // const [counter, setCounter] = useState(5);

  return (
    <div className="app-container">
      <div className="counter-box">
        <h1 className="title">Counter App</h1>

        <h3 className="value">Current Value: {counter}</h3>

        <div className="btn-group">
          <button className="btn add" onClick={addVal}>
            Add Value by 5: {counter}
          </button>
          <br />
          <button className="btn remove" onClick={removeVal}>
            Decrease Value by 5: {counter}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
