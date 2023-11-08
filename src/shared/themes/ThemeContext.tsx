import { createContext, useContext, useState } from 'react';
import { Box, CssBaseline, Theme, ThemeProvider } from '@mui/material';
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
    setThemeName(oldThemeName => (oldThemeName === 'light' ? 'dark' : 'light')); 
  };

  const theme = themeName === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};