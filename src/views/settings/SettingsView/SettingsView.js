import styles from './SettingsView.module.css';
import createStyles from "@/utils/createStyles";
import { PasswordChange } from "@/views/settings/PasswordChange/PasswordChange";

const cx = createStyles(styles);

const SettingsView = () => {

  return (
    <div>
      <h1 className={cx('title')}>Настройки</h1>
      <PasswordChange/>
    </div>
  )
};

export {
  SettingsView
};
