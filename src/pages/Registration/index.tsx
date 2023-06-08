import clsx from 'clsx';

import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ReactComponent as IconEyeClosed } from '../../assets/icons/action/EyeClosed.svg';
import { ReactComponent as IconEyeOpen } from '../../assets/icons/action/EyeOpen.svg';
import Input from '../../components/UI/Input';
import Loader from '../../components/UI/Loader';
import { Button } from '../../components/UI/buttons';
import { useRegisterMutation } from '../../redux/api/apiSlice';
import { RouteNames } from '../../router';
import { RegisterFields } from '../../types';
import cl from '../Registration/RegistrationPage.module.scss';

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [signUp, { isLoading, isSuccess, error }] = useRegisterMutation();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleNavigationToAuth = () => {
    navigate(RouteNames.auth);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<RegisterFields>({ mode: 'all' });

  const onSubmit: SubmitHandler<RegisterFields> = (formData) => {
    signUp(formData);
  };

  useEffect(() => {
    if (error && 'status' in error && error.status === 400) {
      toast.error(
        'Такой логин или e-mail уже записан в системе. Попробуйте зарегистрироваться по другому логину или e-mail.'
      );
    }

    if (error && 'status' in error && error.status !== 400) {
      toast.error(
        'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
      );
      console.error(error);
    }
  }, [error]);

  return (
    <>
      {isLoading && <Loader />}
      {!isSuccess && (
        <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={cl.formTitle}>Регистрация</h2>

          <Input
            {...register('username', {
              required: true,
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d).*$/,
                message: 'Используйте для логина латинский алфавит и цифры',
              },
            })}
            placeholder='Придумайте логин для входа'
            className={clsx(cl.input, errors?.username && cl.inputError)}
          />
          <span className={cl.prompt}>
            Используйте для логина латинский алфавит и цифры
          </span>

          <Input
            {...register('password', {
              required: true,
              minLength: {
                value: 8,
                message: 'Минимум 8 символов',
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d).*$/,
                message:
                  'Пароль должен содержать минимум 1 заглавную букву, 1 цифру',
              },
            })}
            placeholder='Пароль'
            icon={
              watch('password') &&
              (isShowPassword ? (
                <IconEyeOpen onClick={() => setIsShowPassword(false)} />
              ) : (
                <IconEyeClosed onClick={() => setIsShowPassword(true)} />
              ))
            }
            type={isShowPassword ? 'text' : 'password'}
            className={clsx(cl.input, errors?.password && cl.inputError)}
          />
          <span className={cl.prompt}>
            Пароль не менее 8 символов, c заглавной буквой и цифрой
          </span>

          <Input
            {...register('firstName', {
              required: true,
            })}
            placeholder='Имя'
            className={clsx(cl.input, errors?.firstName && cl.inputError)}
          />

          <Input
            {...register('lastName', {
              required: true,
            })}
            placeholder='Фамилия'
            className={clsx(cl.input, errors?.lastName && cl.inputError)}
          />

          <Input
            {...register('phone', {
              required: true,
              pattern: /^(?:\+375|375)?(?:44|33|25|29)\d{7}$/,
            })}
            placeholder='Номер телефона'
            className={clsx(cl.input, errors?.phone && cl.inputError)}
          />
          <span className={cl.prompt}>В формате +375 (xx) xx-xx-xx</span>

          <Input
            {...register('email', {
              required: true,
              pattern: {
                value:
                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                message: 'Введите корректный e-mail',
              },
            })}
            placeholder='E-mail'
            className={clsx(cl.input, errors?.email && cl.inputError)}
          />

          <Button
            disabled={!isValid}
            type='submit'
            className={cl.btn}
            size='max'
          >
            Регистрация
          </Button>
          <div className={cl.redirect}>
            <span>Есть учётная запись?</span>
            <Button onClick={handleNavigationToAuth} variant='text'>
              Войти
            </Button>
          </div>
        </form>
      )}
      {isSuccess && (
        <div className={cl.registrationBlockStatus}>
          <h4>Регистрация успешна</h4>
          <p>
            Регистрация прошла успешно. Зайдите в личный кабинет, используя свои
            логин и пароль
          </p>
          <Button onClick={handleNavigationToAuth} size='max'>
            Войти
          </Button>
        </div>
      )}
    </>
  );
};

export default RegistrationPage;
