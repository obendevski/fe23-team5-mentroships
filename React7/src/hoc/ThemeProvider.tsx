import { useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "#333" : "#fff";

  const backgroundColor = theme === "light" ? "#fff" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export default ThemeProvider;
