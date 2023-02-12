import { useSwiper } from "swiper/react";
import Icon from '@/assets/images/chevron-btn.svg';
import styles from './ReviewCard.module.css';
import createStyles from "@/utils/createStyles";

const cx = createStyles(styles);

const NextButton = () => {
  const swiper = useSwiper();

  return (
    <button
      className={cx('next')}
      onClick={() => swiper.slideNext()}>
      <Icon/>
    </button>
  )
};

export {
  NextButton
};
