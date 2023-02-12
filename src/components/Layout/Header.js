import styles from './styles/Header.module.css';
import LogoSvg from '@/assets/images/logo.svg';
import UserSvg from '@/assets/images/user.svg';
import BasketSvg from '@/assets/images/basket.svg';
import { Navigation } from "@/components/Layout/Navigation";
import createStyles from "@/utils/createStyles";
import Button from "@/components/Button";
import { useState } from "react";
import { Auth } from "@/components/Auth/Auth";
import { Reset } from "@/components/Auth/Reset";

const cx = createStyles(styles);

const Header = () => {

  const [authModal, setAuthModal] = useState();
  const [registerModal, setRegisterModal] = useState();
  const [resetModal, setResetModal] = useState();

  const toRegister = () => {
    setAuthModal(false);
    setRegisterModal(true);
  };

  const toReset = () => {
    setAuthModal(false);
    setResetModal(true);
  };

  return (
    <header className={styles.header}>
      <div className={cx('container', 'h-100', styles.inner)}>
        <div className={cx('logo', 'h-100')}>
          <LogoSvg/>
          <Navigation/>
        </div>
        <div className={cx('buttons')}>
          <Button
            icon={<UserSvg/>}
            onClick={() => setAuthModal(true)}
          >
            Войти
          </Button>
          <Button
            variant="led"
            icon={<BasketSvg/>}
          >
            Быстрый заказ
          </Button>
        </div>
      </div>

      {authModal && (
        <Auth
          toReset={toReset}
          toRegister={toRegister}
          onClose={() => setAuthModal(false)}
        />
      )}
      {registerModal && (
        <Auth
          register={true}
          onClose={() => setRegisterModal(false)}
        />
      )}
      {resetModal && (
        <Reset
          onClose={() => setResetModal(false)}
        />
      )}
    </header>
  )
};

export { Header };
