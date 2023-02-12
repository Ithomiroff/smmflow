import styles from './FastOrder.module.css';
import createStyles from "@/utils/createStyles";
import Chip from "@/components/Chip";
import { SocialCategories } from "./SocialCategories/SocialCategories";

const cx = createStyles(styles);

const FastOrder = () => {

  return (
    <div className={cx('section')}>
      <div className={cx('topPanel')}/>
      <div className="container">
        <Chip variant="light">Наше продвижение</Chip>
        <h1 className={cx('title')}>Быстрый заказ</h1>
        <SocialCategories/>
      </div>
    </div>
  )
};

export {
  FastOrder
};
