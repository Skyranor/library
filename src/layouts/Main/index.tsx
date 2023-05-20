import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';
import cl from './MainLayout.module.scss';

const MainLayout = () => (
  <div className={cl.page}>
    <Header />
    <main className={cl.content}>
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
