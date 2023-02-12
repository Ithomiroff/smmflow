import styles from './ReadyForOrder.module.css';
import createStyles from "@/utils/createStyles";
import Button from "@/components/Button";

const cx = createStyles(styles);

const ReadyForOrder = () => {

  return (
    <div className={cx('inner')}>
      <div className="container">
        <h2>Готовы сделать заказ?</h2>
        <div className={cx('content')}>
          <span>
            Вы увидите результат уже через несколько минут после заказа, на ваш <br/>
            профиль посыпется та самая волна активности, которую вы ищете
          </span>
          <Button variant="gradient">Стать популярнее</Button>
        </div>
      </div>
    </div>
  )
};

export {
  ReadyForOrder
};
