import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import ScrollToTop from "./ScrollToTop";

const Allroutes = () => {
  return (
    <Routes>
      <ScrollToTop/>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Allroutes;