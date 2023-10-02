import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(initialTheme);

  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <ThemeContext.Provider value={{ changeTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
