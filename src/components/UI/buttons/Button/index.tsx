import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import cl from './Button.module.scss';

type ButtonProps = {
  className?: string;
  isDisabled?: boolean;
  size?: 'l' | 's';
  variant?: 'primary' | 'secondary' | 'text';
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({
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
