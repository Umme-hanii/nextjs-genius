"use client";

import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  light: "fantasy",
  sunset: "sunset",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.sunset);

  const toggleTheme = () => {
    const newTheme = theme === themes.light ? themes.sunset : themes.light;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm text-secondary bg-transparent"
    >
      {theme === themes.light ? (
        <BsMoonFill className="h-4 w-4" />
      ) : (
        <BsSunFill className="h-4 w-4" />
      )}
    </button>
  );
};
export default ThemeToggle;
