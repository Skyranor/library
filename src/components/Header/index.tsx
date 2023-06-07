import clsx from 'clsx';

import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { ScreenWidthContext } from '../../Context/ScreenWidthContext';
import avatar from '../../assets/images/avatar.jpg';
import logo from '../../assets/images/logo.svg';
import { ScreenWidth, useAppDispatch, useClickOutside } from '../../hooks';
import { useGetUserDataQuery } from '../../redux/api/apiSlice';
import { resetFilter } from '../../redux/books/booksSlice';
import { logout } from '../../redux/user/userSlice';
import { RouteNames } from '../../router';
import cl from './Header.module.scss';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const screenWidth = useContext(ScreenWidthContext);

  const [isModalActive, setModalActive] = useState(false);
  const { data: user } = useGetUserDataQuery();

  const handleCloseModal = () => {
    setModalActive(false);
  };

  const modalRef = useClickOutside<HTMLDivElement>(handleCloseModal);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleClickLogo = () => {
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
          {screenWidth >= ScreenWidth.LAPTOP &&
            (pathname === RouteNames.profile ? (
              <h1>Профиль</h1>
            ) : (
              <h1>Библиотека</h1>
            ))}

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
