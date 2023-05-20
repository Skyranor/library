import { Link } from 'react-router-dom';

import bookImg from '../../../assets/images/book.jpg';
import { ReactComponent as DefaultImg } from '../../../assets/images/card-image.svg';
import { Book } from '../../../models/Book';
import Rating from '../../Rating';
import { Button } from '../../UI/buttons';
import cl from './CardBook.module.scss';

type CardBookProps = {
  book: Book;
};

const CardBook = ({ book }: CardBookProps) => {
  return (
    <li className={cl.card}>
      <div className={cl.description}>
        <h3>{book.title}</h3>
        <p>
          {book.author}, {book.year}
        </p>
      </div>
      <Link to={`/books/${book.id}`}>
        {!book.img ? (
          <div className={cl.cardImg}>
            <DefaultImg />
          </div>
        ) : (
          <img className={cl.cardImg} src={bookImg} alt='книга' />
        )}
      </Link>
      <Rating rating={Number(book.rating)} className={cl.bookRating} />
      <Button>Забронировать</Button>
    </li>
  );
};

export default CardBook;
