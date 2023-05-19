import { Routes, Route } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../router';
import MainLayout from '../layouts/Main';

const AppRouter = () => {
  const isAuth = true;

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
