import { Button } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from '../shared/themes/ThemeContext';
import { About, Contact, Home, Process } from '../pages';
import { Projects } from '../pages/Projects';

export const AppRoutes = () => {
  const { toggleTheme } = useTheme();

  return (
    <Routes>
      <Route path='/home' element={<ScrollLink to="home" smooth={true} duration={500}>Início</ScrollLink>} />
      <Route path='/sobre' element={<ScrollLink to="about" smooth={true} duration={500}>Sobre</ScrollLink>} />
      <Route path='/solucoes' element={<ScrollLink to="projects" smooth={true} duration={500}>Soluções</ScrollLink>} />
      <Route path='/processo' element={<ScrollLink to="process" smooth={true} duration={500}>Desenvolvimento</ScrollLink>} />
      <Route path='/contato' element={<ScrollLink to="contact" smooth={true} duration={500}>Contato</ScrollLink>} />
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
};