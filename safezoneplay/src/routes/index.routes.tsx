import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/Login/LoginPage';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path='/' />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  );
};

export default RoutesMain;
