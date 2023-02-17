import styles from './PasswordChange.module.css';
import createStyles from "@/utils/createStyles";
import { Input } from "@/components/Input/Input";
import { useFormik } from "formik";
import Button from "@/components/Button";

const cx = createStyles(styles);

const PasswordChange = () => {

  const formik = useFormik({
    initialValues: {
      password: '',
      passwordConfirm: '',
    },
    validateOnMount: true,
    validateOnChange: true,
    validate: ({ password, passwordConfirm }) => {
      const errors = {};

      const pass = password.trim();
      const passConf = passwordConfirm.trim();

      if (pass.length === 0) {
        errors.password = true;
      }
      if (passConf.length === 0) {
        errors.passwordConfirm = true;
      }

      if (pass.length > 0 && passConf.length > 0 && pass === passConf) {
        errors.password = true;
        errors.passwordConfirm = true;
      }

      return errors;
    },
  })

  return (
    <form className={cx('form')}>
      <h2>Сменить пароль</h2>
      <span className={cx('hint')}>Введите пароль, который вы используете сейчас и новый пароль, который вы хотите установить</span>

      <div className={cx('inputs')}>
        <Input
          type="password"
          name="password"
          label="Пароль"
          placeholder="Введите пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Input
          type="password"
          name="passwordConfirm"
          label="Новый пароль"
          placeholder="Введите новый пароль"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
        />
      </div>
      <div className={cx('submit')}>
        <Button
          disabled={!formik.isValid}
          variant="gradient"
        >Сменить пароль</Button>
      </div>
    </form>
  )
};

export {
  PasswordChange
};
