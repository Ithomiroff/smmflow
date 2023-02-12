import { Modal } from "@/components/Modal/Modal";
import styles from './styles/Auth.module.css';
import createStyles from "@/utils/createStyles";
import AuthSvg from '@/assets/images/auth.svg';
import { Input } from "@/components/Input/Input";
import Button from "@/components/Button";
import { Formik } from 'formik';
import requests from "@/api/urls";
import { useAppRootContext } from "@/context/AppRoot";
import { useState } from "react";


const cx = createStyles(styles);

const Auth = ({ register, onClose, toRegister, toReset }) => {

  const { setData } = useAppRootContext();

  const [successMsg, setSuccessMsg] = useState();

  const onSubmit = async ({ email, password }, { setErrors }) => {
    try {
      const form = new FormData();
      form.append('email', email);
      form.append('password', password);
      const { success, msg } = await (register ? requests.register(form) : requests.login(form))

      if (success) {
        setSuccessMsg(register ? 'Вы успешно зарегистрировались': 'Вы успешно вошли в аккаунт');
        const { data: user } = await requests.userInfo();
        setData({ user });
        onClose();
      } else {
        setErrors({
          email: msg,
          password: msg
        })
      }
    } catch (err) {

    }
  };

  const onRegister = (event) => {
    event.preventDefault();
    toRegister();
  };

  const onReset = (event) => {
    event.preventDefault();
    toReset();
  };

  return (
    <Modal
      onClose={onClose}
    >
      <div className={styles.inner}>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, errors, handleBlur, handleSubmit}) => (

              <form
                className={cx('block', 'form')}
                onSubmit={handleSubmit}
              >
                <h2>{register ? 'Регистрация' : 'Вход в аккаунт'}</h2>
                <Input
                  className={cx('input')}
                  autoComplete="off"
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Введите email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  errorText={errors.email}
                />
                <Input
                  className={cx('input')}
                  autoComplete="off"
                  type="password"
                  name="password"
                  label="Пароль"
                  placeholder="Введите пароль"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  errorText={errors.password}
                />
                {!register && <a href="" onClick={onReset}>Забыли пароль?</a>}
                {successMsg && <span className={cx('success')}>{successMsg}</span>}
                <Button
                  type="submit"
                  variant="gradient"
                >
                  {register ? 'Зарегистрироваться' : 'Войти'}
                </Button>
                {!register &&  <span>Нет аккаунта? <a href="" onClick={onRegister}>Зарегистрироваться</a></span>}
              </form>
            )}
          </Formik>
        <div className={cx('block', 'image')}>
          <AuthSvg/>
        </div>
      </div>
    </Modal>
  )
};

export {
  Auth
};
