import clsx from 'clsx';
import PropTypes from 'prop-types';

import cl from './IconButton.module.scss';

const IconButton = ({
  icon,
  className = '',
  isActive = false,
  onClick = () => {},
}) => {
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

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default IconButton;
