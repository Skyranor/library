import clsx from 'clsx';

import cl from './rating.module.scss';
import { ReactComponent as EmptyStar } from '../../assets/icons/empty-star.svg';

type RatingProps = {
  rating: number;
  className?: string;
};

const Rating = ({ rating, className }: RatingProps) => {
  return (
    <div className={clsx(cl.rating, className)}>
      {!rating ? (
        <span className={cl.noReview}>ещё нет оценок</span>
      ) : (
        [1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={Math.round(rating) >= star ? cl.active : ''}
          >
            <EmptyStar />
          </span>
        ))
      )}
    </div>
  );
};

Rating.defaultProps = {
  className: '',
};

export default Rating;
