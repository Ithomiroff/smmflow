import styles from './OrderDetail.module.css';
import createStyles from "@/utils/createStyles";
import Image from "next/image";

const cx = createStyles(styles);

const OrderDetail = ({ item, selected }) => {

  return (
    <article className={cx('card', 'order')}>
      <div className={cx('header')}>
        <Image
          alt=""
          src=""
          width={40}
          height={40}
        />
        <h2 className={cx('title')}>Подписчики Instagram</h2>
      </div>
      <div className={cx('content')}>
        <p>
          Ссылка: <span className={cx('url')}>https://instagram.com/durov</span>
        </p>
        <p>
          Тариф: <span className={cx('pink')}>Живые</span>
        </p>
        <p>
          Количество: <span className={cx('pink')}>1000</span>
        </p>
      </div>
    </article>
  )
};

export {
  OrderDetail
};
