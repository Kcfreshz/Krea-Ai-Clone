"use client";

import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from "react";

export const ThemeContext = createContext();

type themeShape = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: themeShape) => {
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// function useTheme() {
//   const context = useContext(ThemeContext);
//   return context;
// }

// export  ThemeContextProvider
// const ThemeContextModule = [ThemeContextProvider, useTheme];
// export default ThemeContextModule;
