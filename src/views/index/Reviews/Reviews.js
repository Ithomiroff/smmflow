import Chip from "@/components/Chip";
import styles from './Reviews.module.css';
import createStyles from "@/utils/createStyles";
import {
  Swiper,
  SwiperSlide,
  useSwiper
} from 'swiper/react';
import 'swiper/css';
import ReviewCard from "@/views/index/Reviews/ReviewCard";
import { useWindowSize } from "@/utils/useResize";

const cx = createStyles(styles);

const Reviews = () => {

  const { width } = useWindowSize();

  const swiper = useSwiper();
  // swiper.
  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <div>
          <Chip variant="light">Результаты работы</Chip>
          <h1 className={cx('title')}>Отзывы довольных <br/> клиентов</h1>
          <p>
            Наши клиенты всегда деляться впечатлениями о <br/>
            сотрудничестве с нами, что позволяет нам видеть <br/>
            свои результаты и улучшать наш сервис.
          </p>
        </div>

        <Swiper
          className={cx('swiper')}
          spaceBetween={24}
          slidesPerView={width > 1100 ? 1.5 : 1}
        >
          <SwiperSlide className={cx('slide')}>
            <ReviewCard/>
          </SwiperSlide>
          <SwiperSlide className={cx('slide')}>
            <ReviewCard/>
          </SwiperSlide>
          <SwiperSlide className={cx('slide')}>
            <ReviewCard/>
          </SwiperSlide>
          <SwiperSlide className={cx('slide')}>
            <ReviewCard/>
          </SwiperSlide>
          <SwiperSlide className={cx('slide')}>
            <ReviewCard isLast={true}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
};

export {
  Reviews
};
