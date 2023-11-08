import { Link as ScrollLink } from 'react-scroll';
import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<ScrollLink to="home" smooth={true} duration={500} />} />
      <Route path='/sobre' element={<ScrollLink to="about" smooth={true} duration={500} />} />
      <Route path='/solucoes' element={<ScrollLink to="projects" smooth={true} duration={500} />} />
      <Route path='/processo' element={<ScrollLink to="process" smooth={true} duration={500} />} />
      <Route path='/contato' element={<ScrollLink to="contact" smooth={true} duration={500} />} />
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
};