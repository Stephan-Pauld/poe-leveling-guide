import { useState } from "react";
import "./App.css";
import ActDisplay from "./components/ActDisplay";
import ActSelect from "./components/ActSelect";
function App() {
  const [actSelect, setActSelect] = useState("act1");

  return (
    <div className="App">
      <ActSelect setActSelect={setActSelect} />
      <ActDisplay actSelect={actSelect} />
    </div>
  );
}

export default App;
