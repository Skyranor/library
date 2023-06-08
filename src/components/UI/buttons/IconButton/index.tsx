import clsx from 'clsx';

import cl from './IconButton.module.scss';

interface IconButtonProps {
  icon: React.ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const IconButton = ({
  icon = null,
  className = '',
  isActive = false,
  onClick = () => {},
}: IconButtonProps) => {
  const classNames = clsx(
    cl['icon-button'],
    isActive && cl['icon-button-active'],
    className
  );

  return (
    <button type='button' onClick={onClick} className={classNames}>
      {icon}
    </button>
  );
};

export default IconButton;
