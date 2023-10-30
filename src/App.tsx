import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/themes/ThemeContext';


function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
