import clsx from 'clsx';

import { ReactComponent as EmptyStar } from '../../assets/icons/empty-star.svg';
import cl from './Rating.module.scss';

interface RatingProps {
  rating?: number | null;
  className?: string;
  isVisibleNumber?: boolean;
  setCountActiveStars?: (n: number) => void;
}

const Rating = ({
  rating = null,
  className = '',
  isVisibleNumber = false,
  setCountActiveStars = () => {},
}: RatingProps) => {
  return (
    <div className={clsx(cl.rating, className)}>
      {rating === null ? (
        <span className={cl.noReview}>ещё нет оценок</span>
      ) : (
        [1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={Math.round(rating) >= star ? cl.active : ''}
          >
            <EmptyStar onClick={() => setCountActiveStars(star)} />
          </span>
        ))
      )}
      {isVisibleNumber && <span className={cl.number}>{rating}</span>}
    </div>
  );
};

export default Rating;
