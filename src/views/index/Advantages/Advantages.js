import Chip from "@/components/Chip";
import styles from './Advantages.module.css';
import createStyles from "@/utils/createStyles";
import Eye from '@/assets/images/advantages/eye.svg';
import Block from '@/assets/images/advantages/block.svg';
import Reputation from '@/assets/images/advantages/reputation.svg';
import Stat from '@/assets/images/advantages/stat.svg';
import Top from '@/assets/images/advantages/top.svg';
import Reliability from '@/assets/images/advantages/reliability.svg';

const cx = createStyles(styles);

const LIST = [
  {
    key: 'watchers',
    title: 'Просмотры с удержанием',
    text: 'Добавляемые просмотры имеют повышенное удержание',
    icon: <Eye/> ,
  },
  {
    key: 'blocks',
    title: 'Отсутствие блокировок',
    text: 'Рекламируемый контент гарантированно не получит санкций',
    icon: <Block/> ,
  },
  {
    key: 'reputation',
    title: 'Сохранность репутации',
    text: 'Премиум источники рекламных просмотров для крупных заказов',
    icon: <Reputation/> ,
  },
  {
    key: 'stat',
    title: 'Статистика компании',
    text: 'Добавляемые просмотры имеют повышенное удержание',
    icon: <Stat/> ,
  },
  {
    key: 'top',
    title: 'Вывод в топ',
    text: 'Добавляемые просмотры имеют повышенное удержание',
    icon: <Top/> ,
  },
  {
    key: 'reliability',
    title: 'Надежность',
    text: 'Гарантия на все добавляемые социальные показатели',
    icon: <Reliability/> ,
  },
];

const Advantages = () => {

  return (
    <div className="container">
      <div className={cx('inner')}>
        <div className={cx('header')}>
          <Chip variant="light">Нам доверяют</Chip>
          <h1>Наши приемущества</h1>
          <p>Наши клиенты всегда деляться впечатлениями о сотрудничестве с нами, что позволяет <br/> нам видеть свои результаты и улучшать наш сервис.</p>
        </div>
        <ul className={cx('list')}>
          {LIST.map((item) => (
            <li key={item.key} className={cx('item')}>
              <div className={cx('itemIcon')}>
                <div className={cx('icon')}>
                  {item.icon}
                </div>
              </div>
              <div className={cx('itemText')}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};

export {
  Advantages
};
