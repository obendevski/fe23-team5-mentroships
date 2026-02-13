import { createContext } from "react";

interface DefaultContextValues {
  toggleTheme: () => void;
  theme: "light" | "dark";
}

export const DarkModeContext = createContext<DefaultContextValues>({
  toggleTheme: () => {},
  theme: "light",
});
