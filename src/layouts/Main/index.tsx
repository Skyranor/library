import { Outlet } from 'react-router-dom';

import cl from './MainLayout.module.scss';
import Header from '../../components/Header';

const MainLayout = () => (
  <div className={cl.page}>
    <Header />
    <main className={cl.content}>
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
