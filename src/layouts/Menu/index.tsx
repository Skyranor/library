import clsx from 'clsx';

import Categories from '../../components/Categories';
import cl from './menuLayout.module.scss';

const MenuLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className={clsx(cl.mainWrapper, 'wrapper')}>
      <h2 className={cl.visuallyHidden}>Интернет-библиотека cleverland</h2>

      <nav className={cl.menu}>
        <ul className={cl.menuList}>
          <li className={cl.listItem}>
            <div className={cl.listItemActive}>Витрина книг</div>
            <div className={cl.border} />
            <Categories />
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default MenuLayout;
