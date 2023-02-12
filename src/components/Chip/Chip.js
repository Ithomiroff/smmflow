import styles from './Chip.module.css';
import createStyles from "@/utils/createStyles";

const cx = createStyles(styles);

const Chip = ({ variant = 'dark', children, className }) => (
  <div className={cx('chip', variant, className)}>
    <span>{children}</span>
  </div>
)

export {
  Chip
};
