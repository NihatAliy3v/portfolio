// Routes
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { themeInLocal } = useContext(ThemeContext);

  document.body.setAttribute("class", "dark-mode");

  return (
    <div className={`App ${themeInLocal === "dark" ? "dark-mode" : ""}`}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
