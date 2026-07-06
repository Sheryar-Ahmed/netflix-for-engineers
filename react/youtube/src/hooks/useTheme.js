// localstorgae and sessionstorage

// localStorage.setItem('theme', 'dark');
// localStorage.getItem('theme');
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme ? theme : "light";
  });

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };


  return { theme, toggleTheme };
}
