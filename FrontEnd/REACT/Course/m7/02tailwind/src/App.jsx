import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Sanjay",
    age: 23,
  };
  let newArray = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test!</h1>
      <Card channel="chaiorcode" someObje={myObj} array={newArray} />
      <Card channel="chaiorcode" />
      <Card username={"Mimo"} />
    </>
  );
}

export default App;
