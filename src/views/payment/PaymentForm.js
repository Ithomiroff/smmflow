import styles from './Payment.module.css';
import createStyles from "@/utils/createStyles";
import { Input } from "@/components/Input/Input";
import { PaymentType } from "@/views/payment/PaymentType/PaymentType";
import { useAppRootContext } from "@/context/AppRoot";
import Button from "@/components/Button";
import { OrderDetail } from "@/views/payment/OrderDetail/OrderDetail";
import { useFormik } from "formik";
import {
  useEffect,
  useState
} from "react";
import requests from "@/api/urls";

const cx = createStyles(styles);

const PaymentForm = ({ id }) => {

  const { appData: { payments = [] } } = useAppRootContext();

  const [serverMsg, setServerMsg] = useState();

  const onSubmit = async (values) => {
    setServerMsg(undefined);
    try {
      const form = new FormData();
      form.append('email', values.email);
      form.append('method', values.method);
      form.append('order_id', id);

      const { msg, success, url } = await requests.checkoutOrder(form);

      if (success) {
        setServerMsg({
          success: true,
          msg,
        });
        setTimeout(() => {
          window.location.href = url;
        }, 500);
      } else {
        setServerMsg({
          success: false,
          msg,
        });
      }

    } catch (err) {

    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      method: '',
    },
    validateOnChange: true,
    validateOnMount: true,
    validate: ({ email }) => {
      const errors = {};

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = true;
      }

      return errors;
    },
    onSubmit,
  });

  useEffect(() => {
    if (payments[0]?.id) {
      formik.setFieldValue('method', payments[0].id);
    }
  }, [payments]);

  return (
    <section className={cx('section')}>
      <div className="container">
        <h1>Оплата заказа</h1>
        <div className={cx('info')}>
          <form className={cx('block')} onSubmit={formik.handleSubmit}>
            <Input
              type="email"
              label="Укажите email"
              placeholder="Введите ваш email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <h2>Описание услуги</h2>
            <div className={cx('types')}>
              {payments.map((item) => (
                <PaymentType
                  key={item.id}
                  item={item}
                  selected={item.id === formik.values.method}
                  onSelect={() => formik.setFieldValue('method', item.id)}
                />
              ))}
            </div>
            {serverMsg && (
              <div className={cx({ success: serverMsg.success, error: !serverMsg.success })}>
                <span>{serverMsg.msg}</span>
              </div>
            )}
            <Button
              disabled={!formik.isValid}
              variant="gradient"
            >Оплатить 450 руб</Button>
          </form>
          <div className={cx('block')}>
            <OrderDetail/>
          </div>
        </div>
      </div>
    </section>
  )
};

export {
  PaymentForm
};
