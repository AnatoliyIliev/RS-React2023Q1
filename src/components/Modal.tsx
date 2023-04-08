import { Modal } from '../types';

import styles from '../styles/Modal.module.scss';

function Modal({ children, onClose }: Modal) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={styles.modal_backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal_content}>{children}</div>
    </div>
  );
}

export default Modal;
