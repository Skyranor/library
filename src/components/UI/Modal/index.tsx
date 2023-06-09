import { ReactComponent as CloseIcon } from '../../../assets/icons/action/Close.svg';
import { Button, IconButton } from '../buttons';
import cl from './Modal.module.scss';

interface ModalProps {
  title: string;
  buttonText: string;
  onClose: () => void;
  children: React.ReactNode;
  onClick?: () => void;
  buttonDisabled?: boolean;
}

const Modal = ({
  buttonText,
  buttonDisabled = false,
  title,
  onClose,
  children,
  onClick,
}: ModalProps) => {
  return (
    <>
      <div className={cl.modal}>
        <h4 className={cl.modalTitle}>{title}</h4>
        {children}
        <Button
          onClick={onClick}
          className={cl.modalBtn}
          variant='primary'
          size='max'
          disabled={buttonDisabled}
        >
          {buttonText}
        </Button>
        <IconButton
          onClick={onClose}
          className={cl.modalCloseBtn}
          icon={<CloseIcon />}
        />
      </div>
      <div className={cl.modalBackdrop} />
    </>
  );
};
export default Modal;
