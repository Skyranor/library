import { useState } from 'react';
import { toast } from 'react-toastify';

import { useAddFeedbackMutation } from '../../../redux/api/apiSlice';
import Rating from '../../Rating';
import Loader from '../../UI/Loader';
import Modal from '../../UI/Modal';
import cl from './AddFeedback.module.scss';

interface AddFeedbackProps {
  onClose: () => void;
  userId: string;
  bookId: string;
}

const AddFeedback = ({ onClose, userId, bookId }: AddFeedbackProps) => {
  const [countActiveStars, setCountActiveStars] = useState(0);
  const [comment, setComment] = useState('');

  const [addFeedback, { isLoading }] = useAddFeedbackMutation();

  const handleAddFeedback = async () => {
    if (countActiveStars) {
      try {
        await addFeedback({
          data: {
            rating: countActiveStars,
            text: comment,
            user: userId,
            book: bookId,
          },
        }).unwrap();
        toast.success('Оценка добавлена');
        onClose();
      } catch (error) {
        console.error(error);
        toast.error(
          'Что-то пошло не так, оценка не добавлена. Попробуйте позже!'
        );
      }
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Modal
        onClick={handleAddFeedback}
        title='Оцените книгу'
        buttonText='Оценить'
        onClose={onClose}
      >
        <div className={cl.container}>
          <div className={cl.rating}>
            <p>Ваша оценка</p>
            <Rating
              rating={countActiveStars}
              setCountActiveStars={setCountActiveStars}
            />
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder='Комментарий'
            className={cl.textarea}
          />
        </div>
      </Modal>
    </>
  );
};

export default AddFeedback;
