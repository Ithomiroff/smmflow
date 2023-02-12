import styles from './Question.module.css';
import createStyles from "@/utils/createStyles";
import Plus from "@/assets/images/plus.svg";

const cx = createStyles(styles);

const Question = ({ title, text, id, open, onOpen }) => {

  return (
    <div className={cx('item', { open })}>
      <div className={cx('header')}>
        <h2>{title}</h2>
        <div
          className={cx('icon')}
          onClick={() => onOpen(id)}
        >
          <Plus/>
        </div>
      </div>
      <div className={cx('content')}>
        <div className={cx('contentInner')}>
          {text}
        </div>
      </div>
    </div>
  )
};

export {
  Question
};
