import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");

  return (
      <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        some things added
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        some more content

      </div>
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4">
          Red
        </button>
      </div>
      </>
  );
}

export default App;
