import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // using hooks to display changes everywhere.
  // Note: here counter is a variable, and set counter is a function.
  let [counter, setCounter] = useState(15);

  // first function: it increases the counter value, only until 20
  const addValue = () => {
    console.log("value added", Math.random(), counter);
    counter = counter + 1;
    if(counter>20)
    {

    }
    else
    {
      setCounter(counter);
    }
    
  };
    // 2nd function which reduces value by 1, until it reaches 0.
  const removeValue = () => {
    counter--;
    if(counter<=0){

    }
    else
    {
      setCounter(counter);
    }
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
