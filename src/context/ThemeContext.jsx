import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme ? "dark" : "light");
  };
  let themeInLocal = localStorage.getItem("theme");
  return (
    <ThemeContext.Provider value={{ changeTheme, themeInLocal }}>
      {children}
    </ThemeContext.Provider>
  );
};
