import styles from './styles/Navigation.module.css';
import ChevronIcon from '@/assets/images/chevron.svg';
import createStyles from "@/utils/createStyles";
import { useState } from "react";
import Services from "@/components/Services";

const cx = createStyles(styles);

const Navigation = () => {

  const [opened, setOpened] = useState(false);

  const toggle = (value) => () => setOpened(value);

  const toLink = (id) => (event) => {
    event.preventDefault();
    document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={cx('item')}>
          <a className={cx('services', { servicesOpen: opened })} onClick={toggle(true)}>
            Услуги
            <ChevronIcon className={cx('icon')}/>
          </a>
          {opened && <Services onClose={toggle(false)}/>}
        </li>
        <li className={cx('item')}>
          <a onClick={toLink('advantages')}>Преимущества</a>
        </li>
        <li className={cx('item')}>
          <a onClick={toLink('reviews')}>Отзывы</a>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
