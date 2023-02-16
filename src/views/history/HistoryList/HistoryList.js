import styles from './HistoryList.module.css';
import createStyles from "@/utils/createStyles";
import { HistoryRow } from "@/views/history/HistoryList/HistoryRow/HistoryRow";
import { CardHistoryItem } from "@/views/history/HistoryList/CardHistoryItem/CardHistoryItem";

const cx = createStyles(styles);

const HistoryList = () => {

  return (
    <section>
      <h1 className={cx('title')}>История заказов</h1>
      <div className={cx('table')}>
        <div className={cx('head')}>
          <div className={cx('cell')}>Дата</div>
          <div className={cx('cell')}>Заказ</div>
          <div className={cx('cell')}>Кол-во</div>
          <div className={cx('cell')}>Цена</div>
          <div className={cx('cell')}>Статус</div>
        </div>
        <HistoryRow/>
        <HistoryRow/>
        <HistoryRow/>
        <HistoryRow/>
        <HistoryRow/>
      </div>
      <div className={cx('cards')}>
        <CardHistoryItem/>
        <CardHistoryItem/>
        <CardHistoryItem/>
        <CardHistoryItem/>
        <CardHistoryItem/>
        <CardHistoryItem/>
      </div>
    </section>
  )
};

export {
  HistoryList
};
