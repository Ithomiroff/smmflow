import styles from './Select.module.css';
import createStyles from "@/utils/createStyles";
import Chevron from "@/assets/images/chevron.svg";
import {
  useEffect,
  useState
} from "react";
import Image from "next/image";

const cx = createStyles(styles);

const Select = ({ errorText, className, options, selectedId, onChange, label, ...props }) => {
  const [open, setOpen] = useState();

  const toggle = () => setOpen(prev => !prev);

  const selectedValue = options.find(({ id }) => id === selectedId);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        document.addEventListener('click', toggle, false);
      }, 100);
    }
    return () => document.removeEventListener('click', toggle, false);
  }, [open]);

  const onSelectionClick = (event) => event.stopPropagation();

  const onSelect = (id) => () => {
    onChange(id);
    toggle();
  };

  return (
    <div className={cx('wrapper', className, { error: Boolean(errorText) }, { open })}>
      <div
        className={cx('input')}
      >
        <label htmlFor="box">{label}</label>
        <div
          className={cx('box')}
          onClick={toggle}
        >
          {
            selectedValue ? (
              <div
                className={cx('item')}
              >
                {
                  selectedValue.icon && (
                    <Image
                      alt={selectedValue.name}
                      src={selectedValue.icon}
                      width={24}
                      height={24}
                    />
                  )
                }
                <span>{selectedValue.name}</span>
              </div>
            ) : <span className={cx('placeholder')}>{props.placeholder}</span>
          }
        </div>
        <div className={cx('icon')}>
          <Chevron/>
        </div>
      </div>
      {open && (
        <div
          className={cx('selection')}
          onClick={onSelectionClick}
        >
          <ul className={cx('list')}>
            {options.map((item) => (
              <li
                key={item.id}
                className={cx('item')}
                onClick={onSelect(item.id)}
              >
                {
                  item.icon && (
                    <Image
                      alt={item.name}
                      src={item.icon}
                      width={24}
                      height={24}
                    />
                  )
                }
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export {
  Select
};
