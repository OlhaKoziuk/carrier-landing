import React from 'react';
import s from './ServiceFeatures.module.css';
import fan from '../../assets/mode_fan.png';
import wifi from '../../assets/wifi.png';
import tv from '../../assets/tv.png';
import wc from '../../assets/wc.png';
import weekend from '../../assets/weekend.png';
import animals from '../../assets/animals.png';

export const ServiceFeatures: React.FC = () => {
  return (
    <section className={s.section}>
      <header className={s.head}>
        <h2 className={s.title}>Сервіс</h2>
        <p className={s.subtitle}>Найкращі умови для вашого комфорту</p>
      </header>

      <div className={s.grid}>
        <div className={s.card}>
          <img src={fan} alt="fan" width={40} height={40} style={{ objectFit:'contain' }} />
          <span className={s.label}>Кондиціонер</span>
        </div>

        <div className={s.card}>
          <img src={wifi} alt="wifi" width={40} height={40} style={{ objectFit:'contain' }} />
          <span className={s.label}>Wi-Fi</span>
        </div>

        <div className={s.card}>
          <img src={tv} alt="tv" width={40} height={40} style={{ objectFit:'contain' }} />
          <span className={s.label}>TV</span>
        </div>

        <div className={s.card}>
          <img src={wc} alt="wc" width={40} height={40} style={{ objectFit:'contain' }} />
          <span className={s.label}>Туалет</span>
        </div>

        <div className={s.card}>
          <img src={weekend} alt="weekend" width={40} height={40} style={{ objectFit:'contain' }} />
          <span className={s.label}><span>Зручні</span><br /><span>сидіння</span></span>
        </div>

        <div className={s.card}>
          <img src={animals} alt="animals" width={40} height={40} style={{ objectFit:'contain' }} />
          <span className={s.label}><span>Перевозимо</span><br /><span>тварин</span></span>
        </div>
      </div>
    </section>
  );
}
