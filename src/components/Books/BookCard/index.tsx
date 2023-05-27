import clsx from 'clsx';

import { Link } from 'react-router-dom';

import { ReactComponent as DefaultImg } from '../../../assets/images/card-image.svg';
import { DisplayBook } from '../../../types';
import { BookDTO } from '../../../types/DTO/Book';
import { formatDate } from '../../../utils/formatDate';
import Rating from '../../Rating';
import { Button } from '../../UI/buttons';
import cl from './BookCard.module.scss';

type BookCardProps = {
  book: BookDTO;
  display?: DisplayBook;
};

const BookCard = ({ book, display = 'column' }: BookCardProps) => {
  return (
    <li>
      <Link
        className={clsx(cl.card, cl[`card-${display}`])}
        to={`/books/${book.id}`}
      >
        <div className={cl.description}>
          <h3>{book.title}</h3>
          {book.authors && (
            <p>
              {book.authors.join(', ')}, {book.issueYear}
            </p>
          )}
        </div>

        {!book.image ? (
          <div className={cl.cardImg}>
            <DefaultImg />
          </div>
        ) : (
          <img className={cl.cardImg} src={book.image.url} alt='книга' />
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
