// Routes
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { themeInLocal } = useContext(ThemeContext);

  return (
    <div className={`App ${themeInLocal === "light" ? "" : "dark-mode"}`}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
