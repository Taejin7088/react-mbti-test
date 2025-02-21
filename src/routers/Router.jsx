import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Test from '../pages/Test';
import Results from '../pages/Results';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ isLogin }) => {
  //해당 페이지에 접근하는데 로그인 안했으면 로그인페이지로 보냄
  if (!isLogin) {
    return <Navigate to='/Login' replace />;
  }
  return <Outlet />;
};

const PublicRoute = ({ isLogin }) => {
  //해당 페이지에 접근하는데 로그인 했으면 마이페이지로 보냄
  if (isLogin) {
    return <Navigate to='/profile' replace />;
  }
  return <Outlet />;
};

const Router = () => {
  const { isLogin } = useSelector((state) => state.auth);

  return (
    <Routes element={<Home />}>
      <Route path='/' element={<Home />} />

      <Route element={<PublicRoute isLogin={isLogin} />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>

      <Route element={<PrivateRoute isLogin={isLogin} />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/test' element={<Test />} />
        <Route path='/results' element={<Results />} />
      </Route>
    </Routes>
  );
};

export default Router;
