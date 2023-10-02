import React, { useContext } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

export const Theme = () => {
  // true dark
  // false light

  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <div className="theme">
      <div className="theme-container">
        <button className="theme-btn" onClick={changeTheme}>
          {theme === "dark" ? (
            <MdOutlineLightMode className="theme-icon light" size={20} />
          ) : (
            <MdDarkMode className="theme-icon dark" size={20} />
          )}
        </button>
      </div>
    </div>
  );
};
