import React, { useContext, createContext, Children } from "react";

type IdarkMode = boolean;

interface IfullTheme {
  isDarkMode: boolean;
  changeTheme?: () => void;
}

const ThemeContext = createContext<IfullTheme>({
  isDarkMode: false,
});

interface Ichildren {
  children: React.ReactNode;
}

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider: React.FC<Ichildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const changeTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
