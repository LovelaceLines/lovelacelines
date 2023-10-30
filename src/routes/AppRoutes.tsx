import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from '../shared/themes/ThemeContext';

export const AppRoutes = () => {
  const { toggleTheme } = useTheme();

  return (
    <Routes>
		  <Route path='/home' element={<Button variant='contained' color='primary' onClick={toggleTheme}>Teste</Button>} />
		  <Route path='*' element={<Navigate to='/home' />} />
	  </Routes>
  );
};