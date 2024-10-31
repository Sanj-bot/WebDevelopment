import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
let counter = 1;
function App() {
  // let counter = 5;
  // counter++;
  const addValue = () => {
    console.log("value added", Math.random(), counter);
    counter++;
  };
  const removeValue = () => {
    counter--;
    console.log("value subtracted", Math.random(), counter);
  };
  return (
    <>
      <h1>chai or react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={removeValue}>remoove value</button>
    </>
  );
}

export default App;
