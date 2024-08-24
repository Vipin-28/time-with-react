import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("olive");
  function handleChangeColor(newColor) {
    console.log(newColor);
    return () => setColor(newColor);
  }
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        Hello
      </div>
      <button onClick={handleChangeColor("blue")}>Blue</button>
      <button onClick={handleChangeColor("green")}>Green</button>
      <button onClick={handleChangeColor("orange")}>Orange</button>
      <button
        className="outline-none px-4 py-1 rounded-full text-white shodow-lg"
        onClick={handleChangeColor("red")}
      >
        Red
      </button>
    </>
  );
}

export default App;
