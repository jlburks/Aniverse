import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="header">
        <h1 id="title">Aniverse</h1>
        <h1>tabs</h1>
      </div>
      <div id="mainContent">
        <h1>body</h1>
      </div>
      <div>
        <h1 id="footer">footer</h1>
      </div>
    </>
  );
}

export default App;
