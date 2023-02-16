import styles from './CardHistoryItem.module.css';
import { CellOrder } from "@/views/history/HistoryList/CellOrder/CellOrder";
import createStyles from "@/utils/createStyles";

const cx = createStyles(styles);

const CardHistoryItem = () => {

  return (
    <div className={cx('card', 'item')}>
      <div className={cx('top')}>
        <CellOrder/>
      </div>
      <div className={cx('bordered')}>
        <p>Дата: <span className={cx('gray')}>11.12.2022</span></p>
        <p>Ссылка: <span className={cx('gray')}>https://instagram.com/durov</span></p>
      </div>
      <div className={cx('bordered')}>
        <p>Количество: <span className={cx('purple')}>10000</span></p>
        <p>Цена: <span className={cx('purple')}>1000</span></p>
      </div>
      <div className={cx('status')}>
        <span className={cx('gray')}>Статус:</span> <span className={cx('purple')}>В обработке</span>
      </div>
    </div>
  )
};

export {
  CardHistoryItem
};
