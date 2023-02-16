import styles from './CellOrder.module.css';
import createStyles from "@/utils/createStyles";

const cx = createStyles(styles);

const CellOrder = () => {
  return (
    <div className={cx('cell')}>
      <div className={cx('icon')}>Icon</div>
      <div className={cx('text')}>
        <span>Подписчики</span>
        <span>Тариф: <span className={cx('mark')}>Живые</span></span>
      </div>
    </div>
  )
};

export {
  CellOrder
};
