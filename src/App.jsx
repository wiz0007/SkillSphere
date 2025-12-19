import { useState } from "react";
import "./App.css";
import Allroutes from "./routes/AllRoutes";
import ScrollToTop from "./routes/ScrollToTop"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ScrollToTop/>
      <Allroutes />
    </div>
  );
}

export default App;
