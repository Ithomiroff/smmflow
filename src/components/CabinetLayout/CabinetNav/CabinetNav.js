import styles from './CabinetNav.module.css';

import History from "@/assets/images/history.svg";
import Balance from "@/assets/images/balance.svg";
import Settings from "@/assets/images/settings.svg";
import Logout from "@/assets/images/logout.svg";
import createStyles from "@/utils/createStyles";
import { useRouter } from "next/router";
import Link from "next/link";

const cx = createStyles(styles);

const NAV = [
  {
    path: '/cabinet',
    label: 'История заказов',
    icon: <History/>,
    width: 210,
  },
  {
    path: '/cabinet/balance',
    label: 'Пополнить баланс',
    icon: <Balance/>,
    width: 230,
  },
  {
    path: '/cabinet/settings',
    label: 'Настройки',
    icon: <Settings/>,
    width: 180,
  },
  {
    path: 'logout',
    label: 'Выйти',
    icon: <Logout/>,
    width: 150,
  }
]

const CabinetNav = () => {
  const { asPath } = useRouter();

  return (
    <ul className={cx('nav')}>
      {NAV.map((item) => (
        <Link
          style={{ minWidth: item.width, }}
          key={item.path}
          href={item.path}
        >
          <li
            className={cx('item', { 'active': asPath === item.path })}
          >
            <div className={cx('icon')}>
              {item.icon}
            </div>
            <span>{item.label}</span>
          </li>
        </Link>
      ))}
    </ul>
  )
};

export {
  CabinetNav
};
