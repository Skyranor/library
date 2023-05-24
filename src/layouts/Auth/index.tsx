import { Outlet } from 'react-router-dom';

import cl from './Auth.module.scss';

const AuthLayout = () => {
  return (
    <main className={cl.main}>
      <div className={cl.container}>
        <h1 className={cl.title}>Cleverland</h1>
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
