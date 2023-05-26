import clsx from 'clsx';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import avatar from '../../assets/images/avatar.jpg';
import logo from '../../assets/images/logo.svg';
import { useAppDispatch, useClickOutside } from '../../hooks';
import { logout } from '../../redux/user/userSlice';
import { RouteNames } from '../../router';
import cl from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const [isModalActive, setModalActive] = useState(false);

  const handleCloseModal = () => {
    setModalActive(false);
  };

  const modalRef = useClickOutside<HTMLDivElement>(handleCloseModal);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  return (
    <header className={cl.header}>
      <div className={clsx(cl.headerWrapper, 'wrapper')}>
        <Link to={RouteNames.main}>
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
              onClick={() => setModalActive(!isModalActive)}
              ref={modalRef}
              className={cl.avatar}
              style={{ backgroundImage: `url(${avatar})` }}
            />
            {isModalActive && (
              <ul className={cl.profileModal}>
                <li>
                  <Link to={RouteNames.profile}>Профиль</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Выход</button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
