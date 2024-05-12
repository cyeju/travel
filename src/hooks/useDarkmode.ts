import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      document.body.setAttribute("data-theme", localTheme);
    } else {
      setTheme("light");
      document.body.setAttribute("data-theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return [theme, toggleTheme];
};
