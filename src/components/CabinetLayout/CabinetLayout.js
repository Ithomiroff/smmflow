import styles from './CabinetLayout.module.css';
import createStyles from "@/utils/createStyles";
import { CabinetNav } from "@/components/CabinetLayout/CabinetNav/CabinetNav";

const cx = createStyles(styles);

const CabinetLayout = ({ children }) => {
  return (
    <div className="container">
      <div className={cx('page')}>
        <aside className={cx('side')}>
          <CabinetNav/>
        </aside>
        <section className={cx('content')}>{children}</section>
      </div>
    </div>

  )
};

export {
  CabinetLayout
};
