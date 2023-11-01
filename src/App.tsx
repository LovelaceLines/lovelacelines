import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/themes/ThemeContext';
import { NavigationBar } from './components';
import { Contact } from './pages';


function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <NavigationBar />
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
