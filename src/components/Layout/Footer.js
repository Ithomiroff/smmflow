import styles from './styles/Footer.module.css';
import createStyles from "@/utils/createStyles";
import Button from "@/components/Button";
import Payments from "@/assets/images/payments.svg";

const cx = createStyles(styles);


const Footer = () => {

  return (
    <footer className={cx('footer')}>
      <div className="container">
        <nav className={cx('nav')}>
          <ul className={cx('links')}>
            <li>
              <a href="#">Каталог услуг</a>
            </li>
            <li>
              <a href="#">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="#">Правила сервиса</a>
            </li>
            <li>
              <a href="#">Преимущества</a>
            </li>
            <li>
              <a href="#">Публичная оферта</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
            <li>
              <a href="#">Отзывы</a>
            </li>
            <li>
              <a href="#">Пользовательское соглашение</a>
            </li>
          </ul>
          <div className={cx('contacts')}>
            <a href="#">support@smmflow.net</a>
            <span>Нужна помощь?</span>
            <Button variant="led">Связаться</Button>
          </div>
        </nav>
        <div className={cx('bottom')}>
          <span>SMMFLOW - сервис, где вы сможете приобрести качественное продвижение в социальных сетях по выгодным ценам.</span>
          <Payments/>
        </div>
      </div>
    </footer>
  )
};

export {
  Footer
};

