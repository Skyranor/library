import clsx from 'clsx';

import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ReactComponent as IconEyeClosed } from '../../assets/icons/action/EyeClosed.svg';
import { ReactComponent as IconEyeOpen } from '../../assets/icons/action/EyeOpen.svg';
import Input from '../../components/UI/Input';
import Loader from '../../components/UI/Loader';
import { Button } from '../../components/UI/buttons';
import { useAppDispatch } from '../../hooks';
import { useLoginMutation } from '../../redux/api/apiSlice';
import { setUserData } from '../../redux/user/userSlice';
import { LoginFields } from '../../types';
import cl from './Auth.module.scss';

const AuthPage = () => {
  const dispatch = useAppDispatch();

  const [isShowPassword, setIsShowPassword] = useState(false);

  const [login, { data, isLoading, isError, isSuccess }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserData(data));
      localStorage.setItem('user', JSON.stringify(data));
    }
  }, [isSuccess]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFields>({ mode: 'all' });

  const onSubmit: SubmitHandler<LoginFields> = (formData) => {
    login(formData);
  };

  return (
    <>
      <form className={cl.form} onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <Loader />}
        <h2 className={cl.formTitle}>Вход в личный кабинет</h2>
        <Input
          {...register('identifier', {
            required: true,
          })}
          placeholder='Логин'
          className={clsx(cl.input, errors.identifier && cl.inputError)}
        />

        <Input
          {...register('password', {
            required: true,
          })}
          className={clsx(cl.input, errors?.password && cl.inputError)}
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
        />

        {isError && (
          <span className={cl.error}>Неверный логин или пароль!</span>
        )}
        <Button type='submit' className={cl.btn} size='max'>
          Войти
        </Button>
        <div className={cl.redirect}>
          <span>Нет учетной записи?</span>
          <Button variant='text'>Регистрация</Button>
        </div>
      </form>
      {isLoading && <div className={cl.blur} />}
    </>
  );
};

export default AuthPage;
