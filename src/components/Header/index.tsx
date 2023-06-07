import clsx from 'clsx';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import avatar from '../../assets/images/avatar.jpg';
import logo from '../../assets/images/logo.svg';
import { useAppDispatch, useClickOutside } from '../../hooks';
import { useGetUserDataQuery } from '../../redux/api/apiSlice';
import { resetFilter } from '../../redux/books/booksSlice';
import { logout } from '../../redux/user/userSlice';
import { RouteNames } from '../../router';
import cl from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isModalActive, setModalActive] = useState(false);
  const { data: user } = useGetUserDataQuery();

  const handleCloseModal = () => {
    setModalActive(false);
  };

  const modalRef = useClickOutside<HTMLDivElement>(handleCloseModal);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
  };

  const handleClickLogo = () => {
    //тут наверное нужно в middleware запихнуть, но я еще до этого не дошел
    dispatch(resetFilter());
    navigate(RouteNames.main);
  };

  return (
    <header className={cl.header}>
      <div className={clsx(cl.headerWrapper, 'wrapper')}>
        <img
          onClick={handleClickLogo}
          className={cl.logo}
          src={logo}
          alt='логотип компании cleverland'
        />
        <div className={cl.gridTwoColumns}>
          <h1>Библиотека</h1>
          <div className={cl.profile}>
            <span>Привет, {user?.firstName}!</span>
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
