import styles from './BalancesHistory.module.css';
import createStyles from "@/utils/createStyles";

const cx = createStyles(styles);

const BalancesHistory = () => {

  return (
    <div className={cx('table')}>
      <div className={cx('header')}>
        <div className={cx('cell')}>Дата</div>
        <div className={cx('cell')}>Сумма</div>
        <div className={cx('cell')}>Статус</div>
      </div>
      <div className={cx('row')}>
        <div className={cx('cell')}>11.12.2022</div>
        <div className={cx('cell')}>1000 <span className="text-purple">₽</span></div>
        <div className={cx('cell')}>
          <span className="text-green">Оплачен</span>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('cell')}>11.12.2022</div>
        <div className={cx('cell')}>1000 <span className="text-purple">₽</span></div>
        <div className={cx('cell')}>
          <span className="text-green">Оплачен</span>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('cell')}>11.12.2022</div>
        <div className={cx('cell')}>1000 <span className="text-purple">₽</span></div>
        <div className={cx('cell')}>
          <span className="text-green">Оплачен</span>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('cell')}>11.12.2022</div>
        <div className={cx('cell')}>1000 <span className="text-purple">₽</span></div>
        <div className={cx('cell')}>
          <span className="text-green">Оплачен</span>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('cell')}>11.12.2022</div>
        <div className={cx('cell')}>1000 <span className="text-purple">₽</span></div>
        <div className={cx('cell')}>
          <span className="text-green">Оплачен</span>
        </div>
      </div>

    </div>
  )
};

export {
  BalancesHistory
};
