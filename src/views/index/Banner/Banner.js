import styles from './Banner.module.css';
import createStyles from "@/utils/createStyles";
import TopBanner from "@/assets/images/top-banner.svg";
import Line from "@/assets/images/line-banner.svg";
import { Chip } from "../../../components/Chip/Chip";
import Button from "@/components/Button";

const cx = createStyles(styles);

const Banner = () => {

  return (
    <div className={cx('section')}>
      <div className={cx('container', 'h-100', 'inner')}>
        <article className={cx('info')}>
          <Chip className={cx('chip')}>Выйди на новый уровень вовлеченности!</Chip>
          <h1>
            Продвижение во всех <br/> соцсетях <span className={cx('marked')}>за пару кликов</span>
          </h1>
          <p>
            Получайте подписчиков, лайки, репосты, просмотры, прослушивания и
            любую другую активность на свои профили в социальных сетях по
            самым низким ценами на рынке и в самые быстрые сроки!
          </p>
          <Button
            variant="gradient"
          >Быстрый заказ</Button>
        </article>
        <div className={cx('banners')}>
          <TopBanner/>
        </div>
      </div>
    </div>
  )
};

export {
  Banner
};
