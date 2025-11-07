import { useState } from "react";

import "./App.css";
import Allroutes from "./routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Allroutes />
    </div>
  );
}

export default App;
