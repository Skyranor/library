import { Route, Routes } from 'react-router-dom';

import MainLayout from '../layouts/Main';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter = () => {
  const isAuth = false;

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
      </Route>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
