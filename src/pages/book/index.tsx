import clsx from 'clsx';

import { useParams } from 'react-router-dom';

import { ReactComponent as DefaultImg } from '../../assets/images/card-image.svg';
import Rating from '../../components/Rating';
import { Button } from '../../components/UI/buttons';
import { useGetBookQuery } from '../../redux/api/apiSlice';
import cl from './BookPage.module.scss';

const BookPage = () => {
  const { id = '' } = useParams();

  const { data: book } = useGetBookQuery(id);

  return (
    <div className={cl.product}>
      {book && (
        <div className={clsx(cl.productWrapper, 'wrapper')}>
          <section className={cl.about}>
            {book.images ? (
              <img className={cl.img} src={book.images[0].url} alt='книга' />
            ) : (
              <div className={cl.img}>
                <DefaultImg />
              </div>
            )}
            <h2>{book.title}</h2>
            <span>
              {book.authors?.join(', ')}, {book.issueYear}
            </span>
            <Button>Забронировать</Button>
            <div className={cl.description}>
              <h3>О книге</h3>

              {book.description?.split('\\n').map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>

          <section className={cl.rating}>
            <h3>Рейтинг</h3>
            <Rating
              rating={book.rating}
              isVisibleNumber={true}
              className={cl.stars}
            />
          </section>

          <section className={cl.details}>
            <h3>Подробная информация</h3>
            <div className={cl.twoColumns}>
              <div className={cl.contentLeft}>
                <dl>
                  <dt>Издательство</dt>
                  <dd>{book.publish}</dd>
                </dl>
                <dl>
                  <dt>Год издания</dt>
                  <dd>{book.issueYear}</dd>
                </dl>
                <dl>
                  <dt>Страниц</dt>
                  <dd>{book.pages}</dd>
                </dl>
                <dl>
                  <dt>Переплёт</dt>
                  <dd>{book.cover}</dd>
                </dl>
                <dl>
                  <dt>Формат</dt>
                  <dd>{book.format}</dd>
                </dl>
              </div>
              <div className={cl.contentRight}>
                <dl>
                  <dt>Жанр</dt>
                  <dd>{book.categories?.join(', ')}</dd>
                </dl>
                <dl>
                  <dt>Вес</dt>
                  <dd>{book.weight}</dd>
                </dl>
                <dl>
                  <dt>ISBN</dt>
                  <dd>{book.ISBN}</dd>
                </dl>
                <dl>
                  <dt>Изготовитель</dt>
                  <dd>{book.producer}</dd>
                </dl>
              </div>
            </div>
          </section>

          <section className={cl.reviews}>
            <div className={cl.title}>
              <h3>Отзывы</h3>
              <span>{book.comments?.length}</span>
            </div>

            <Button>оценить книгу</Button>
          </section>
        </div>
      )}
    </div>
  );
};

export default BookPage;
