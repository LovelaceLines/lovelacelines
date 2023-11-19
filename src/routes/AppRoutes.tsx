import { Routes, Route, Navigate } from 'react-router-dom';
import { Blog } from '../pages';
import { LandingPage } from '../pages/landingpage/LandingPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/home' element={<LandingPage />} />
      <Route path='/inicio' element={<LandingPage />} />
      <Route path='/blog/*' element={<Blog />} />

      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  );
};