import clsx from 'clsx';

import avatar from '../../assets/images/avatar.jpg';
import cl from './ProfilePage.module.scss';

const ProfilePage = () => {
  return (
    <div className={clsx('wrapper', cl.profileWrapper)}>
      <div className={cl.user}>
        <h1>Иванов Иван</h1>
        <img src={avatar} alt='Аватар пользователя' />
      </div>
      <section className={cl.reservedBook}>
        <h2>Забронированная книга</h2>
        <p>
          Здесь вы можете просмотреть забронированную книгу, а так же отменить
          бронь
        </p>
        <div className={cl.purpleBlock}>
          <p>Забронируйте книгу и она отобразится </p>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
