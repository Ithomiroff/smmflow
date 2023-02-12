import styles from './styles/Services.module.css';
import createStyles from "@/utils/createStyles";
import ServicesFlat from '@/assets/images/services-flat.svg';
import { useAppRootContext } from "@/context/AppRoot";
import Image from "next/image";
import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from "react";
import { CategoryList } from "@/components/Services/CategoryList";
import { useSpring, animated } from '@react-spring/web'


const cx = createStyles(styles);

const Services = ({ onClose }) => {
  const rootSpr = useSpring({
    from: { y: 100, opacity: 0, },
    to: { y: 0, opacity: 1 },
  });

  const { appData } = useAppRootContext();

  const [activeCategory, setActiveCategory] = useState();

  const categories = useMemo(() => appData.categories.find(item => item.id === activeCategory)?.children, [appData.categories, activeCategory]);

  const onSelect = (id) => () => setActiveCategory(prev => prev === id ? null : id);

  const articleClick = (event) => event.stopPropagation();

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', onClose, false);
    }, 100);
    return () => document.removeEventListener('click', onClose, false);
  }, [onClose]);

  return (
    <animated.article
      className={cx('block', 'card')}
      style={rootSpr}
      onClick={articleClick}
    >
      <div className={cx('inner')}>
        <div className={cx('social')}>
          <h2>Социальные сети:</h2>
          <ul>
            {appData.categories.map((item) => (
              <li
                key={item.id}
                className={cx('item', { 'selected': item.id === activeCategory })}
                onClick={onSelect(item.id)}
              >
                <Image
                  alt={item.name}
                  src={item.icon}
                  width={24}
                  height={24}
                />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx('images')}>
          {
            categories ? <CategoryList categories={categories} activeNetwork={activeCategory} onClose={onClose} /> : (
              <div className={cx('banner')}>
                <h2>Выберите социальную <br/> сеть, для подбора <br/> нужной услуги</h2>
                <ServicesFlat/>
              </div>
            )
          }
        </div>
      </div>
    </animated.article>
  )
};

export { Services };
