import Portal from './Portal';

import { Modal } from '../types';

import styles from '../styles/Modal.module.scss';

function Modal({ children, onClose }: Modal) {
  return (
    <Portal>
      <div className={styles.modal_backdrop} onClick={onClose}>
        <div className={styles.modal_content}>{children}</div>
      </div>
    </Portal>
  );
}

export default Modal;
