import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from '../shared/themes/ThemeContext';
import { About, Contact, Home } from '../pages';
import { Projects } from '../pages/Projects';

export const AppRoutes = () => {
  const { toggleTheme } = useTheme();

  return (
    <Routes>
		  <Route path='/home' element={<Home />} />
      <Route path='/sobre' element={<About />} />
      <Route path='/solucoes' element={<Projects />} />
      <Route path='/contato' element={<Contact />}/>
		  <Route path='*' element={<Navigate to='/home' />} />
	  </Routes>
  );
};