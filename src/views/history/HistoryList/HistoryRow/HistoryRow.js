import styles from './HistoryRow.module.css';
import { CellOrder } from "@/views/history/HistoryList/CellOrder/CellOrder";
import createStyles from "@/utils/createStyles";

const cx = createStyles(styles);

const HistoryRow = () => {

  return (
    <div className={cx('content')}>
      <div className={cx('cell')}>11.12.2022</div>
      <div className={cx('cell')}>
        <CellOrder/>
      </div>
      <div className={cx('cell')}>1000</div>
      <div className={cx('cell')}>100</div>
      <div className={cx('cell')}>Выполняется</div>
    </div>
  )
};

export {
  HistoryRow
};
