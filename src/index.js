import React from "react";
import { render } from "react-dom";
import "./index.css";

const App = () => (
  <div>
    <h1 className="text-6xl font-black uppercase">Hello!</h1>
    <button
      onClick={() => alert("Hello!")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Say Hello
    </button>
  </div>
);

render(<App />, document.getElementById("root"));
