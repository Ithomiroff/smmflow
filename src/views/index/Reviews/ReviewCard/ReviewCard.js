import styles from './ReviewCard.module.css';
import createStyles from "@/utils/createStyles";

import Star from '@/assets/images/star.svg';
import Icon from "@/assets/images/chevron-btn.svg";
import {
  useSwiper,
  useSwiperSlide
} from "swiper/react";

const cx = createStyles(styles);

const ReviewCard = ({ isLast }) => {

  const swiper = useSwiper();
  const swiperSlide = useSwiperSlide();

  return (
    <article className={cx('card')}>
      <div className={cx('header')}>
        <span className={cx('name')}>Анна</span>
        <div className={cx('rate')}>
          <div className={cx('stars')}>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
          </div>
          <span>4.9</span>
        </div>
      </div>
      <p  className={cx('text')}>Заказ на <span className={cx('mark')}>Просмотры в Youtube</span></p>
      <p>
        Я не ожидала, что продвижение в Instagram может быть таким простым. Заказала подписчиков через SMMFLOW и очень довольна результатом.
      </p>

      {isLast ? (
        <button
          className={cx('navigator', 'prev')}
          onClick={() => swiper.slidePrev()}>
          <Icon/>
        </button>
      ) : (
        <button
          className={cx('navigator')}
          onClick={() => swiper.slideNext()}>
          <Icon/>
        </button>
      )}
    </article>
  );
};

export {
  ReviewCard
};
