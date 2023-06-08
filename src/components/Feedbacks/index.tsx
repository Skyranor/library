import avatar from '../../assets/images/user.svg';
import Rating from '../Rating';
import cl from './Feedbacks.module.scss';

interface FeedbacksProps {
  feedbacks: {
    rating: number;
    createdAt: string;
    id?: number;
    text?: string;
    user: {
      commentUserId: number;
      firstName: string;
      lastName: string;
      avatarUrl?: string;
    };
  }[];
}

export const Feedbacks = ({ feedbacks }: FeedbacksProps) => {
  return (
    <div className={cl.feedbacks}>
      {feedbacks.map((feedback) => (
        <div key={feedback.user.commentUserId} className={cl.feedback}>
          <div className={cl.author}>
            <img
              src={feedback.user.avatarUrl || avatar}
              alt={'аватар пользователя'}
            />
            <span>
              {feedback.user.firstName} {feedback.user.lastName}
            </span>
            <time dateTime={feedback.createdAt}>
              {new Date(feedback.createdAt).toLocaleDateString('ru-RU')}
            </time>
          </div>
          <Rating rating={feedback.rating} />
          {feedback.text && <p className={cl.text}>{feedback.text}</p>}
        </div>
      ))}
    </div>
  );
};
