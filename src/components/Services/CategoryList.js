import styles from './styles/CategoryList.module.css';
import createStyles from "@/utils/createStyles";
import {
  animated,
  useSpring,
  useTransition
} from "@react-spring/web";
import Link from "next/link";

const cx = createStyles(styles);

const CategoryList = ({ categories, activeNetwork, onClose }) => {
  const slide = useSpring({
    from: {
      x: 120
    },
    to: {
      x: 0
    },
  });

  const transitions = useTransition(
    categories,
    {
      key: (item) => item.id,
      from: { opacity: 0, x: 100 },
      enter: { x: 0, opacity: 1 },
      update: ({ x, opacity }) => ({ x, opacity }),
      trail: 60
    }
  );


  return (
    <animated.div className={cx('list')} style={slide}>
      <h2>Категории:</h2>
      <ul>
        {transitions((style, item) => (
          <animated.li style={style}>
            <Link
              onClick={onClose}
              href={{
              pathname: '/order',
              query: { network: activeNetwork, service: item.id },
            }}>{item.name}</Link>
          </animated.li>
        ))}
      </ul>
    </animated.div>
  )
};

export {
  CategoryList
};
