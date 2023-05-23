import clsx from 'clsx';
import { InputHTMLAttributes, forwardRef } from 'react';

import cl from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...rest }, ref) => {
    return (
      <div className={clsx(cl.wrapper, className)}>
        <input ref={ref} className={cl.input} {...rest} />
        {icon && <div className={cl.icon}>{icon}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
