import { Link } from 'react-router-dom';
import clsx from 'clsx';

import cl from './header.module.scss';
import logo from '../../assets/images/logo.svg';
import avatar from '../../assets/images/avatar.jpg';

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
