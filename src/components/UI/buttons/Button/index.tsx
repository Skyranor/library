import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';

import cl from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'max' | 'l' | 's';
  variant?: 'primary' | 'secondary' | 'text';
}

const Button: FC<ButtonProps> = ({
  className,
  size = 'l',
  variant = 'primary',
  children,
}) => {
  const classNames = clsx(
    cl.button,
    cl[`button-${variant}`],
    cl[`button-${variant}-${size}`],
    className
  );

  return <button className={classNames}>{children}</button>;
};

export default Button;
