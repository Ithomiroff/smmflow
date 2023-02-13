import styles from './OrderCart.module.css';
import createStyles from "@/utils/createStyles";
import { Select } from "@/components/Select/Select";
import {
  useEffect,
  useMemo,
  useState
} from "react";
import { useAppRootContext } from "@/context/AppRoot";
import { Input } from "@/components/Input/Input";
import Button from "@/components/Button";
import Gift from "@/assets/images/gift.svg";
import { useFormik } from "formik";
import { BannerOrder } from "@/views/order/BannerOrder/BannerOrder";
import requests from "@/api/urls";
import { useRouter } from "next/router";

const cx = createStyles(styles);

const OrderCart = () => {

  const { appData } = useAppRootContext();
  const router = useRouter();

  const [serverError, setServerError] = useState();

  const onSubmit = async (values) => {
    setServerError(undefined);

    try {
      const form = new FormData();
      form.append('service_id', values.service_id);
      form.append('url', values.url);
      form.append('quantity', values.quantity);
      const { success, msg, id } = await requests.createOrder(form);

      if (success) {
        router.push({
          pathname: `/payment`,
          query: {
            order: id,
          }
        });
      } else {
        setServerError(msg);
      }
    } catch (err) {

    }
  };

  const formik = useFormik({
    initialValues: { service_id: '', url: '', quantity: '', networkId: '', paymentId: '' },
    onSubmit,
    validateOnChange: true,
    validateOnMount: true,
    validate: values => {
      const errors = {};

      Object.keys(values).forEach((key) => {
        if (!values[key]) {
          errors[key] = true;
        }
      });

      return errors;
    }
  });

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.has('network')) {
      formik.setFieldValue('networkId', query.get('network'));
    }
    if (query.has('service')) {
      formik.setFieldValue('service_id', query.get('service'));
    }
  }, [formik.setFieldValue]);

  const servicesOptions = useMemo(() => {
    return appData.categories.find(({ id }) => id === formik.values.networkId)?.children || [];
  }, [appData.categories, formik.values.networkId]);

  const paymentTypeOptions = useMemo(() => {
    return appData?.services?.[formik.values.service_id] || []
  }, [appData?.services, formik.values.service_id]);

  const onChangeNetwork = (id) => {
    formik.setFieldValue('networkId', id);
    formik.setFieldValue('service_id', formik.initialValues.service_id);
    formik.setFieldValue('paymentId', formik.initialValues.paymentId);
    formik.setFieldValue('quantity', formik.initialValues.quantity);
  };

  const onChangeService = (id) => {
    formik.setFieldValue('service_id', id);
    formik.setFieldValue('paymentId', formik.initialValues.paymentId);
  };

  const total = useMemo(() => {
    if (!formik.values.paymentId || !formik.values.quantity) {
      return 0;
    }
    const option = paymentTypeOptions.find(({ id }) => formik.values.paymentId === id);
    if (!option) {
      return 0;
    }
    return option.price * formik.values.quantity;
  }, [formik.values.paymentId, paymentTypeOptions, formik.values.quantity]);

  const serviceDescription = paymentTypeOptions?.find(({ id }) => formik.values.paymentId === id)?.description || ''

  return(
    <section className={cx('page')}>
      <div className="container">
        <h1>Оформление заказа</h1>
        <form
          className={cx('form')}
          onSubmit={formik.handleSubmit}
        >
          <div className={cx('side', 'right')}>
            <Select
              label="Социальная сеть"
              placeholder="Выберите социальную сеть"
              options={appData.categories || []}
              selectedId={formik.values.networkId}
              onChange={onChangeNetwork}
            />
            <Select
              label="Тип услуги"
              placeholder="Выберите услугу"
              options={servicesOptions}
              selectedId={formik.values.service_id}
              onChange={onChangeService}
            />
            <Select
              label="Тариф"
              placeholder="Выберите тариф"
              options={paymentTypeOptions}
              selectedId={formik.values.paymentId}
              onChange={(id) => formik.setFieldValue('paymentId', id)}
            />
            <Input
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              label="Количество"
              placeholder="Введите количество"
            />
            <Input
              name="url"
              value={formik.values.url}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Укажите ссылку"
              placeholder="https://www.instagram.com/p/CN8Xf1rgWX7/"
            />
          </div>
          <div className={cx('side', 'left')}>
            <article className={cx('card', 'description')}>
              <h2>Описание услуги</h2>
              <p>
                {serviceDescription || 'Здесь будет отображаться вся информация о вашем заказе. Начните оформлять заказ для получения подробной информации и подсчёта цены.'}
              </p>
            </article>
            <div className={cx('promo')}>
              <Input
                className={cx('input')}
                label="Есть промокод?"
                placeholder="Введите промокод"
              />
              <Button
                variant="outline"
              >Активировать</Button>
              <div className={cx('link')}>
                <a href="https://t.me/+38-LLhCR6xFlMmVl" target="_blank" rel="noreferrer">
                  <Gift/>
                  Получить промокод
                </a>
              </div>
            </div>
            <div className={cx('sum')}>
              {serverError && (
                <div className={cx('error')}>
                  {serverError}
                </div>
              )}
              <div className={cx('sumText')}>
                <span>Итого</span>
                <span>{total} руб.</span>
              </div>
              <Button
                disabled={!formik.isValid}
                type="submit"
                variant="gradient"
              >Перейти к оплате</Button>
            </div>
          </div>
        </form>
      </div>
      <BannerOrder/>
    </section>
  )
};

export {
  OrderCart
};
