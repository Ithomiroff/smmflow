import { Modal } from "@/components/Modal/Modal";
import styles from './styles/Reset.module.css';
import createStyles from "@/utils/createStyles";
import Close from "@/assets/images/close.svg";
import { Input } from "@/components/Input/Input";
import Button from "@/components/Button";
import { Formik } from "formik";
import { useState } from "react";
import requests from "@/api/urls";

const cx = createStyles(styles);

const Reset = ({ onClose }) => {

  const [successMsg, setSuccessMsg] = useState();

  const onSubmit = async ({ email, password }, { setErrors }) => {
    try {
      const form = new FormData();
      form.append('email', email);
      const { success, msg } = await requests.recovery(form);

      if (success) {
        setSuccessMsg('Ссылка для сброса пароля отправлена вам на почту');
      } else {
        setErrors({
          email: msg,
        })
      }
    } catch (err) {

    }
  };

  return (
    <Modal onClose={onClose}>
      <div className={cx('inner', 'card')}>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={onSubmit}
        >
          {({ values, handleChange, errors, handleBlur, handleSubmit}) => (

            <form
              className={cx('content')}
              onSubmit={handleSubmit}
            >
              <div className={cx('header')}>
                <h2>Восстановление пароля</h2>
                <div className="close-btn" onClick={onClose}>
                  <Close/>
                </div>
              </div>
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
              {successMsg && <span className={cx('success')}>{successMsg}</span>}
              <Button
                type="submit"
                variant="gradient"
              >
                Сбросить пароль
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </Modal>
  )
};

export {
  Reset
}
