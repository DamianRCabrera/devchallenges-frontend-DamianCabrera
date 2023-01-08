import React from "react";
import { createRoot } from "react-dom";

const App = () => {
  return <div>Hello World</div>;
}

createRoot(document.getElementById("root")).render(<App />);