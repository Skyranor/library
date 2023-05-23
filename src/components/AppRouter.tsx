import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks';
import AuthLayout from '../layouts/Auth';
import MainLayout from '../layouts/Main';
import { setUserData } from '../redux/user/userSlice';
import { RouteNames, privateRoutes, publicRoutes } from '../router';

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

  const token = useAppSelector((state) => state.user.token);
  const isAuth = Boolean(token);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return isAuth ? (
    <Routes>
      <Route path={RouteNames.main} element={<MainLayout />}>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
      <Route path='*' element={<Navigate to={RouteNames.main} />} />
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
      </Route>
    </Routes>
  );
};

export default AppRouter;
