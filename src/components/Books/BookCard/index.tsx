import clsx from 'clsx';

import { MouseEvent } from 'react';
import { Link, useParams } from 'react-router-dom';

import { ReactComponent as DefaultImg } from '../../../assets/images/card-image.svg';
import { usePrefetch } from '../../../redux/api/apiSlice';
import { DisplayBooks } from '../../../types';
import Rating from '../../Rating';
import { Button } from '../../UI/buttons';
import cl from './BookCard.module.scss';

type BookCardProps = {
  id: number;
  rating?: number;
  title: string;
  authors?: string[];
  imageUrl?: string;
  issueYear?: string;
  isBooking?: boolean;
  dateOrder?: string;
  display?: DisplayBooks;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary' | 'text';
  onClick: (e: MouseEvent, id: number) => void;
};

const BookCard = ({
  display = 'column',
  buttonVariant = 'primary',
  id,
  rating,
  title,
  authors,
  imageUrl,
  issueYear,
  isBooking,
  dateOrder,
  buttonText,
  onClick,
}: BookCardProps) => {
  // const prefetchBookPage = usePrefetch('getBook');
  const { category = 'all' } = useParams();

  return (
    <li>
      <Link
        // onMouseEnter={() => prefetchBookPage(String(id))}
        to={`/books/${category}/${id}`}
        className={clsx(cl.card, cl[`card-${display}`])}
      >
        <div className={cl.description}>
          <h3>{title}</h3>
          {authors && (
            <p>
              {authors.join(', ')}, {issueYear}
            </p>
          )}
        </div>

        {imageUrl ? (
          <img className={cl.cardImg} src={imageUrl} alt='книга' />
        ) : (
          <div className={cl.cardImg}>
            <DefaultImg />
          </div>
        )}

        <Rating rating={rating} className={cl.bookRating} />
        <Button
          disabled={isBooking}
          onClick={(e) => onClick(e, id)}
          variant={buttonVariant}
          size='max'
          className={cl.btn}
        >
          {buttonText}
        </Button>
      </Link>
    </li>
  );
};

export default BookCard;
