import styles from './SocialCategories.module.css';
import createStyles from "@/utils/createStyles";
import ArrowSvg from "@/assets/images/arrow.svg";
import {
  Fragment,
  useEffect,
  useMemo,
  useState
} from "react";
import { useAppRootContext } from "@/context/AppRoot";
import Image from "next/image";
import {
  animated,
  useTransition
} from "@react-spring/web";

const cx = createStyles(styles);

const SocialCategories = () => {

  const { appData } = useAppRootContext();

  const [activeKey, setActiveKey] = useState(appData.categories[0]?.id);

  useEffect(() => {
    if (appData.categories[0]) {
      setActiveKey(appData.categories[0]?.id);
    }
  }, [appData.categories])

  const nestedCategories = useMemo(() => appData.categories.find(item => item.id === activeKey)?.children, [appData.categories, activeKey]);


  const transitions = useTransition(
    nestedCategories,
    {
      key: (item) => item.id,
      from: { opacity: 0, scale: 0 },
      enter: (item, index) => (next) => next({ opacity: 1, scale: 1, delay: index * 100 }),
      update: ({ scale, opacity }) => ({ scale, opacity }),
      config: {
        duration: 100,
      }
    }
  );

  const onSelect = (id) => () => setActiveKey(id);

  return (
    <div className={cx('inner')}>
      <ul className={cx('networks')}>
        {appData.categories.map((item) => (
          <Fragment key={item.id}>
            <li
              className={cx('networkItem', { 'selected': activeKey === item.id })}
              onClick={onSelect(item.id)}
            >
              <div className={cx('line')}/>
              <Image
                alt={item.name}
                src={item.icon}
                width={24}
                height={24}
              />
              <span>{item.name}</span>
            </li>
          </Fragment>
        ))}
      </ul>
      {nestedCategories && (
        <ul className={cx('categories')}>
          {transitions((style, item) => (
            <animated.li style={style} key={item.id} className={cx('card')}>
              <div className={cx('icon')}>
                <Image
                  alt={item.name}
                  src={item.icon}
                  width={24}
                  height={24}
                />
              </div>
              <h2>{item.name}</h2>
              <div className={cx('arrow')}>
                <ArrowSvg/>
              </div>
            </animated.li>
          ))}
        </ul>
      )}
    </div>
  )
};

export {
  SocialCategories
};
