import styles from './BalanceView.module.css';
import createStyles from "@/utils/createStyles";
import { Input } from "@/components/Input/Input";
import { useAppRootContext } from "@/context/AppRoot";
import { PaymentType } from "@/views/payment/PaymentType/PaymentType";
import Button from "@/components/Button";
import { BalancesHistory } from "@/views/balance/BalancesHistory/BalancesHistory";
import { useFormik } from "formik";
import {
  useEffect,
  useMemo
} from "react";

const cx = createStyles(styles);

const CHIPS = [
  {
    id: 1,
    sum: 250,
  },
  {
    id: 2,
    sum: 500,
  },
  {
    id: 3,
    sum: 1000,
  },
  {
    id: 4,
    sum: 2500,
  },
  {
    id: 5,
    sum: 5000,
  },
  {
    id: 6,
    sum: 1000,
    add: 50
  },
  {
    id: 7,
    sum: 2500,
    add: 250
  },
  {
    id: 8,
    sum: 5000,
    add: 1000
  }
];

const BalanceView = () => {

  const { appData: { payments = [] } } = useAppRootContext();

  const formik = useFormik({
    initialValues: {
      method: '',
      sum: '',
      chipId: null,
    },
    validate: ({ sum }) => {
      const errors = {};
      if (!sum) {
        errors.sum = true;
      }
      return errors;
    },
    validateOnMount: true,
    validateOnChange: true,
  });

  useEffect(() => {
    if (formik.values.sum && formik.values.sum > 0) {
      formik.setFieldValue('chipId', null);
    }
  }, [formik.values.sum]);

  useEffect(() => {
    if (payments[0]?.id) {
      formik.setFieldValue('method', payments[0].id);
    }
  }, [payments]);

  const onSelectChip = (id) => () => {
    formik.setFieldValue('chipId', id);
    formik.setFieldValue('sum', '');
  };

  const total = useMemo(() => {
    if (formik.values.chipId) {
      const value = CHIPS.find(({ id }) => id === formik.values.chipId);
      return value?.add ? value.sum + value.add : value.sum;
    }
    return formik.values.sum;
  }, [formik.values.sum, formik.values.chipId]);

  return (
    <div>
      <h1 className={cx('title')}>Пополнение баланса</h1>
      <div className={cx('content')}>
        <div className={cx('block')}>
          <form
            className={cx('form')}
          >
            <Input
              className={cx('input')}
              type="number"
              name="sum"
              value={formik.values.sum}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Сумма пополнения"
              placeholder="Введите или выберите ниже"
            />
            <span className={cx('hint')}>Минимальная сумма пополнения 15 руб.</span>
            <ul className={cx('chips')}>
              {CHIPS.map(({ sum, add, id }) => (
                <li
                  key={id}
                  onClick={onSelectChip(id)}
                  className={cx('chip', { chipSelected: id === formik.values.chipId })}
                >
                  <span className={cx('purple')}>{sum} ₽</span>
                  {add && <span className={cx('green')}>+{add} ₽</span>}
                </li>
              ))}
            </ul>
            <div className={cx('services')}>
              <h2>Описание услуги</h2>
              <div className={cx('types')}>
                {payments.map((item) => (
                  <PaymentType
                    layout="horizontal"
                    key={item.id}
                    item={item}
                    selected={item.id === formik.values.method}
                    onSelect={() => formik.setFieldValue('method', item.id)}
                  />
                ))}
              </div>
            </div>
            <div className={cx('error')}>
              <span className="text-error">Ошибка при оплате заказа, попробуйте позже или обратитесь в поддержку</span>
            </div>
            <div className={cx('submit')}>
              <Button
                disabled={!formik.isValid}
                variant="gradient"
              >Оплатить {total && `${total} руб.`}</Button>
            </div>
          </form>
        </div>
        <div className={cx('block')}>
          <BalancesHistory/>
        </div>
      </div>
    </div>
  )
};

export {
  BalanceView
};
