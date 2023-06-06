import clsx from 'clsx';

import { MouseEvent, useState } from 'react';

import { useGetUserDataQuery } from '../../../redux/api/apiSlice';
import { Book, DisplayBooks } from '../../../types';
import { formatDate } from '../../../utils/formatDate';
import CalendarModal from '../../BookingCalendar';
import BookCard from '../BookCard';
import cl from './BookList.module.scss';

type BookListProps = {
  display?: DisplayBooks;
  books: Book[];
};
const BookList = ({ books, display = 'column' }: BookListProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { data: userData } = useGetUserDataQuery();

  const [selectedBookId, setSelectedBookId] = useState<number | null>(null);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleBooking = (e: MouseEvent, id: number) => {
    e.preventDefault();
    setSelectedBookId(id);
    setModalOpen(true);
  };

  return (
    <>
      <ul className={clsx(cl.booksList, cl[`booksList-${display}`])}>
        {books &&
          userData &&
          books.map((book) => (
            <BookCard
              key={book.id}
              display={display}
              id={book.id}
              title={book.title}
              imageUrl={book.image?.url}
              authors={book.authors}
              rating={book.rating}
              issueYear={book.issueYear}
              isBooking={book.booking?.order}
              dateOrder={book.booking?.dateOrder}
              onClick={handleBooking}
              buttonText={
                (book.booking?.customerId === userData.id && `Забронирована`) ||
                (book.booking &&
                  `Занята до ${formatDate(book.booking.dateOrder)}`) ||
                'Забронировать'
              }
              buttonVariant={book.booking ? 'secondary' : 'primary'}
            />
          ))}
      </ul>
      {isModalOpen && selectedBookId && (
        <CalendarModal id={selectedBookId} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default BookList;
