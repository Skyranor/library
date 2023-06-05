import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks';
import AuthLayout from '../layouts/Auth';
import MainLayout from '../layouts/Main';
import { setUserData } from '../redux/user/userSlice';
import { RouteNames, privateRoutes, publicRoutes } from '../router';
import Loader from './UI/Loader';

const AppRouter = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      dispatch(setUserData(JSON.parse(userData)));
    }
    setIsLoading(false);
  }, []);

  const jwt = useAppSelector((state) => state.user.jwt);
  const isAuth = Boolean(jwt);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path='/' element={<Navigate to={RouteNames.main} />} />
        <Route path='*' element={<Navigate to={RouteNames.main} />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path='/' element={<AuthLayout />}>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path='/' element={<Navigate to={RouteNames.auth} />} />
        <Route path='*' element={<Navigate to={RouteNames.auth} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
