// Routes
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { driverObj } from "./driver";




setTimeout(() => {
  if(!localStorage.getItem("driver")){
    driverObj.drive();
  }
  localStorage.setItem("driver",true)
}, 1500);




function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === "light" ? "" : "dark-mode"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
