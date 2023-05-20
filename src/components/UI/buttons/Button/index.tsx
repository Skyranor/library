import clsx from 'clsx';
import { FC } from 'react';

import cl from './Button.module.scss';

type ButtonProps = {
  className?: string;
  isDisabled?: boolean;
  size?: 'max' | 'l' | 's';
  variant?: 'primary' | 'secondary' | 'text';
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({
  className,
  isDisabled = false,
  size = 'l',
  variant = 'primary',
  onClick = () => {},
  children,
}) => {
  const classNames = clsx(
    cl.button,
    cl[`button-${variant}`],
    cl[`button-${variant}-${size}`],
    className
  );

  const handleClick = () => {
    if (onClick && !isDisabled) {
      onClick();
    }
  };

  return (
    <button type='button' className={classNames} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  isDisabled: false,
  size: 'l',
  variant: 'primary',
  onClick: () => {},
};

export default Button;
