import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Allroutes from "./components/routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Allroutes />
    </div>
  );
}

export default App;
