import clsx from 'clsx';

import { MouseEvent } from 'react';
import { toast } from 'react-toastify';

import avatar from '../../assets/images/avatar.jpg';
import BookCard from '../../components/Books/BookCard';
import Loader from '../../components/UI/Loader';
import {
  useCancelBookingMutation,
  useGetUserDataQuery,
  usePrefetch,
} from '../../redux/api/apiSlice';
import cl from './ProfilePage.module.scss';

const ProfilePage = () => {
  const prefetchBooks = usePrefetch('getBooks');

  const {
    data: user,
    isFetching: isUserFetching,
    isSuccess: isUserSuccess,
  } = useGetUserDataQuery();

  const [
    cancelBooking,
    { isSuccess: isCancelBookingSuccess, isLoading: isCancelBookingLoading },
  ] = useCancelBookingMutation();

  const handleCancelBooking = async (e: MouseEvent) => {
    try {
      e.preventDefault();
      await cancelBooking(String(user?.booking?.id));
      toast.success('Бронь отменена');
      prefetchBooks();
    } catch (error) {
      console.error(error);
      toast.error('Что-то пошло не так');
    }
  };

  return (
    <div className={clsx('wrapper', cl.profileWrapper)}>
      {(isUserFetching || isCancelBookingLoading) && <Loader />}
      {isUserSuccess && (
        <>
          <div className={cl.user}>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <img src={avatar} alt='Аватар пользователя' />
          </div>
          <section className={cl.reservedBook}>
            <h2>Забронированная книга</h2>
            <p>
              Здесь вы можете просмотреть забронированную книгу, а так же
              отменить бронь
            </p>

            {user.booking.book && !isCancelBookingSuccess ? (
              <BookCard
                display='row'
                id={user.booking.book.id}
                title={user.booking.book.title}
                authors={user.booking.book.authors}
                imageUrl={user.booking.book.image}
                rating={user.booking.book.rating}
                issueYear={user.booking.book.issueYear}
                dateOrder={user.booking.dateOrder}
                buttonText='Отменить бронь'
                onClick={handleCancelBooking}
              />
            ) : (
              <div className={cl.purpleBlock}>
                <p>Забронируйте книгу и она отобразится </p>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
