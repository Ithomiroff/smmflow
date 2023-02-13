import styles from './BannerOrder.module.css';
import createStyles from "@/utils/createStyles";
import Button from "@/components/Button";
import Banner from "@/assets/images/banner-order.png";

const cx = createStyles(styles);

const BannerOrder = () => {

  return (
    <section className={cx('banner')} style={{ backgroundImage: `url(${Banner.src})` }}>
      <div className={cx('inner', 'container')}>
        <div>
          <h2>Скидки до 50% в нашем телеграм-канале</h2>
          <p>Раздаем промокоды в Telegram каждую неделю</p>
          <Button
            variant="gradient"
          >
            <a href="https://t.me/+38-LLhCR6xFlMmVl" target="_blank" rel="noreferrer">
              Получить промокод
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
};

export {
  BannerOrder
};
