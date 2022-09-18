import { useContext, createContext, useState } from "react";
import { IProps } from "../types/provider.interface";

interface IThemeMode {
  isDarkMode: boolean;
  toggleTheme?: () => void;
}

const ThemeContext = createContext<IThemeMode>({
  isDarkMode: false,
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }: IProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
