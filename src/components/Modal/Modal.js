import styles from './Modal.module.css';
import { useEffect } from "react";

const Modal = ({ children, onClose }) => {

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => document.body.style.overflowY = 'auto';
  }, []);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', onClose, false);
    }, 100);
    return () => document.removeEventListener('click', onClose, false);
  }, [onClose]);


  const onModalClick = (event) => event.stopPropagation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}/>
      <div
        className={styles.content}
        onClick={onModalClick}
      >{children}</div>
    </div>
  )
};

export {
  Modal
};
