import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Test from '../pages/Test';
import Results from '../pages/Results';

const isLogin = false;

const privateRoute = () => {
  //해당 페이지에 접근하는데 로그인 안했으면 로그인페이지로 보냄
  let path = '';
  if (!isLogin) {
    path = <Navigate to='/Login' />;
  }
  return (
    <>
      <Route path='/profile' element={path || <Profile />} />
      <Route path='/test' element={path || <Test />} />
      <Route path='/results' element={path || <Results />} />
    </>
  );
};

const publicRoute = () => {
  //해당 페이지에 접근하는데 로그인 했으면 마이페이지로 보냄
  let path = '';
  if (isLogin) {
    path = <Navigate to='/profile' replace />;
  }
  return (
    <>
      <Route path='/login' element={path || <Login />} />
      <Route path='/signup' element={path || <Signup />} />
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes element={<Home />}>
        <Route path='/' element={<Home />} />
        {privateRoute()}
        {publicRoute()}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
