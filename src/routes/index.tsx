import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Routes>
		  <Route path='/home' element={<div>Home</div>} />
		  <Route path='*' element={<Navigate to='/home' />} />
	  </Routes>
  );
};