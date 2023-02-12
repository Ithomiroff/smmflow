import styles from './Input.module.css';
import createStyles from "@/utils/createStyles";

const cx = createStyles(styles);

const Input = ({ errorText, label, className, ...props }) => (
  <div className={cx('wrapper', className, { error: Boolean(errorText) })}>
    <label htmlFor={props.id}>{label}</label>
    <input {...props}/>
    {errorText &&
    <span className={cx('errorText')}>{errorText}</span>}
  </div>
);

export {
  Input
};
