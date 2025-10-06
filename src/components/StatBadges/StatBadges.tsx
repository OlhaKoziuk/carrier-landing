import React from 'react';
import s from './StatBadges.module.css';

export const StatBadges: React.FC = () => {
  return (
    <div className={s.wrap}>
      <div className={s.item}>
        <span className={s.icon}>
          <span className={s.iconStub} />
        </span>
        <span className={s.text}>
          <span className={s.label}>На ринку від:</span>
          <span className={s.value}>Травень 31, 2011</span>
        </span>
      </div>

      <div className={s.item}>
        <span className={s.icon}>
          <span className={s.iconStub} />
        </span>
        <span className={s.text}>
          <span className={s.label}>Перевезених пасажирів</span>
          <span className={s.value}>4000+</span>
        </span>
      </div>

      <div className={s.item}>
        <span className={s.icon}>
          <span className={s.iconStub} />
        </span>
        <span className={s.text}>
          <span className={s.label}>Автопарк</span>
          <span className={s.value}>8 бусів</span>
        </span>
      </div>

      <div className={s.item}>
        <span className={s.icon}>
          <span className={s.iconStub} />
        </span>
        <span className={s.text}>
          <span className={s.label}>Обслуговуємо</span>
          <span className={s.value}>8 країн</span>
        </span>
      </div>

      <div className={s.item}>
        <span className={s.icon}>
          <span className={s.iconStub} />
        </span>
        <span className={s.text}>
          <span className={s.label}>Місто</span>
          <span className={s.value}>Львів</span>
        </span>
      </div>
    </div>
  );
}
