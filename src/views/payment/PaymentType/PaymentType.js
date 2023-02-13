import styles from './PaymentType.module.css';
import createStyles from "@/utils/createStyles";
import Image from "next/image";

const cx = createStyles(styles);

const PaymentType = ({ item, selected, onSelect }) => {

  return (
    <article className={cx('type', { selected })} onClick={onSelect}>
      <div className={cx('title')}>
        <div className={cx('radio')}/>
        <span>{item.name || <Image alt={item.name_img} key={item.name_img} src={item.name_img} width={100} height={60}/>}</span>
      </div>
      <div className={cx('badges')}>
        {item.badges?.map((src) => (
          <Image
            key={src}
            alt={src}
            width={46}
            height={26}
          />
        ))}
      </div>
    </article>
  )
};

export {
  PaymentType
};
