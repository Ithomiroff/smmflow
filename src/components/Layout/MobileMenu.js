import {
  useEffect,
  useState
} from "react";
import styles from './styles/Header.module.css';
import createStyles from "@/utils/createStyles";
import { useRouter } from "next/router";

const cx = createStyles(styles);

const COMMON_MENU = [
  {
    link: 'advantages',
    name: 'Преимущества',
  },
  {
    link: 'reviews',
    name: 'Отзывы',
  },
  {
    link: 'order',
    name: 'Быстрый заказ',
  },
];

const AUTH_MENU = [
  {
    link: 'order',
    name: 'Сделать заказ',
  },
  {
    link: 'cabinet/orders',
    name: 'Мои заказы',
  },
  {
    link: 'cabinet/balance',
    name: 'Пополнить баланс',
  },
  {
    link: 'cabinet/settings',
    name: 'Настройки',
  },
  {
    link: 'cabinet/logout',
    name: 'Выход',
  },
];


const MobileMenu = ({ authorized }) => {

  const [open, setOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => document.body.style.overflowY = 'auto';
  }, [open]);

  const toggle = () => setOpen(prev => !prev);

  const onSelect = (key) => () => {
    if (authorized) {
      if (key === 'cabinet/logout') {
        //logout
      } else {
        router.push(key);
      }
    } else {
      if (key === 'order') {
        router.push(key);
      } else {
        document.querySelector(`#${key}`)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    toggle();
  };

  const links = authorized ? AUTH_MENU : COMMON_MENU;

  return (
    <div>
      <div
        className={cx('btnWrap')}
        onClick={toggle}
      >
        <div
          className={cx('btn-menu', { mobileOpen: open })}
        />
      </div>

      {open && (
        <div className={cx('wrapper')}>
          <ul>
            {links.map(({ link, name }) => (
              <li
                className={cx('linkItem')}
                key={link}
                onClick={onSelect(link)}
              >
                <h2>{name}</h2>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
};

export {
  MobileMenu
};
