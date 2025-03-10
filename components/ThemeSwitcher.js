"use client";

import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const handleClick = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div onClick={handleClick} className="cursor-pointer flex items-center p-1 rounded-full bg-[#CBA8A8] dark:bg-gray-700 w-[56px]">
      <div
        className={`h-[20px] w-[20px] bg-white rounded-full transition-all duration-300 ${
          theme === "dark" ? "translate-x-[28px]" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default ThemeSwitcher;
