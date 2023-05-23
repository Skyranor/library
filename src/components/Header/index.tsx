import clsx from 'clsx';
import { Link } from 'react-router-dom';

import avatar from '../../assets/images/avatar.jpg';
import logo from '../../assets/images/logo.svg';
import cl from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={clsx(cl.headerWrapper, 'wrapper')}>
        <Link to='/'>
          <img
            className={cl.logo}
            src={logo}
            alt='логотип компании cleverland'
          />
        </Link>
        <div className={cl.gridTwoColumns}>
          <h1>Библиотека</h1>
          <div className={cl.profile}>
            <span>Привет, Иван!</span>
            <div
              className={cl.avatar}
              style={{ backgroundImage: `url(${avatar})` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
