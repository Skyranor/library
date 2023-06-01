import clsx from 'clsx';
import PropTypes from 'prop-types';

import { ReactComponent as EmptyStar } from '../../assets/icons/empty-star.svg';
import cl from './Rating.module.scss';

const Rating = ({ rating = 0, className = '', isVisibleNumber = false }) => {
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
      {isVisibleNumber && <span className={cl.number}>{rating}</span>}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
  className: PropTypes.string,
  isVisibleNumber: PropTypes.bool,
};

export default Rating;
