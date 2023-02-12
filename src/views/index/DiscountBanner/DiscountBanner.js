import styles from './DiscountBanner.module.css';
import createStyles from "@/utils/createStyles";
import DiscountQr from "@/assets/images/discount-qr.svg";
import Button from "@/components/Button";

const cx = createStyles(styles);

const DiscountBanner = () => {

  return (
    <div className={cx('inner')}>
      <div className={cx('banner')}>
        <div className="container h-100">
          <div className={cx('content')}>
            <div className={cx('text')}>
              <h1>Скидки до 50% в нашем <br/> телеграм-канале</h1>
              <h2>Раздаем промокоды в Telegram каждую неделю</h2>
              <Button variant="gradient">Получить промокод</Button>
            </div>
            <div className={cx('image')}>
              <DiscountQr/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export {
  DiscountBanner
};
