import styles from './Button.module.css';
import createStyles from "@/utils/createStyles";

const cx = createStyles(styles);

const Button = ({
  size = 'md',
  variant = 'lightFill',
  icon,
  children,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button className={cx('btn', variant, size, { icon, disabled })} disabled={disabled} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  )
};

export {
  Button
};
