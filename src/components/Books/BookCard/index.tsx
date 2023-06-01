import clsx from 'clsx';

import { Link, useParams } from 'react-router-dom';

import { ReactComponent as DefaultImg } from '../../../assets/images/card-image.svg';
import { usePrefetch } from '../../../redux/api/apiSlice';
import { Book, DisplayBooks } from '../../../types';
import { formatDate } from '../../../utils/formatDate';
import Rating from '../../Rating';
import { Button } from '../../UI/buttons';
import cl from './BookCard.module.scss';

type BookCardProps = {
  book: Book;
  display?: DisplayBooks;
};

const BookCard = ({ book, display = 'column' }: BookCardProps) => {
  const prefetchBookPage = usePrefetch('getBook');
  const { category } = useParams();

  return (
    <li>
      <Link
        onMouseEnter={() => prefetchBookPage(String(book.id))}
        to={`/books/${category}/${book.id}`}
        className={clsx(cl.card, cl[`card-${display}`])}
      >
        <div className={cl.description}>
          <h3>{book.title}</h3>
          {book.authors && (
            <p>
              {book.authors.join(', ')}, {book.issueYear}
            </p>
          )}
        </div>

        {book.image ? (
          <img className={cl.cardImg} src={book.image.url} alt='книга' />
        ) : (
          <div className={cl.cardImg}>
            <DefaultImg />
          </div>
        )}

        <Rating rating={Number(book.rating)} className={cl.bookRating} />
        <Button
          onClick={(e) => {
            e.preventDefault();
          }}
          disabled={book.booking?.order}
          variant={book.booking?.order ? 'secondary' : 'primary'}
          size='max'
        >
          {book.booking?.dateOrder
            ? `Занята до ${formatDate(book.booking.dateOrder)}`
            : 'Забронировать'}
        </Button>
      </Link>
    </li>
  );
};

export default BookCard;
