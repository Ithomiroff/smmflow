import styles from './Button.module.css';
import createStyles from "@/utils/createStyles";

const cx = createStyles(styles);

const Button = ({
  size = 'md',
  variant = 'lightFill',
  icon,
  children,
  loading,
  ...props
}) => {
  return (
    <button className={cx('btn', variant, size, { icon })} {...props}>
      {icon}
      <span>{children}</span>
    </button>
  )
};

export {
  Button
};
