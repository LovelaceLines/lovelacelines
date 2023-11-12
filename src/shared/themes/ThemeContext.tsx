import { createContext, useContext, useEffect, useState } from 'react';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { DarkTheme } from './DarkTheme';
import { LightTheme } from './LightTheme';

interface IThemeContextProps {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextProps);

export const useTheme = () => useContext(ThemeContext);

interface IAppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider = ({ children }: IAppThemeProviderProps) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeName(themeName === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', themeName === 'light' ? 'dark' : 'light');
  };

  const theme = themeName === 'light' ? LightTheme : DarkTheme;

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (localTheme) setThemeName(localTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Box>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};