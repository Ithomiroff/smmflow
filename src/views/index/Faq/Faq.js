import styles from './Faq.module.css';
import createStyles from "@/utils/createStyles";
import Chip from "@/components/Chip";
import QUESTIONS from "@/views/index/Faq/questions";
import Question from "@/views/index/Faq/Question";
import { useState } from "react";

const cx = createStyles(styles);

const Faq = () => {

  const [openId, setOpenId] = useState();

  const onOpen = (id) => setOpenId(prev => prev === id ? undefined : id);

  return (
    <div className="container">
      <div className={cx('inner')}>
        <div className={cx('header')}>
          <Chip variant="light">Популярные ответы</Chip>
          <h1>Частые вопросы</h1>
        </div>

        <div className="list">
          {QUESTIONS.map((item) => (
            <Question
              key={item.key}
              id={item.key}
              title={item.title}
              text={item.text}
              open={openId === item.key}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>
    </div>
  )
};

export {
  Faq
};
