import { Typography, Button, Calendar } from 'antd';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import s from './ProfileSidebar.module.css';
import flagFR from '../../assets/FR - France.png';
import flagIT from '../../assets/flagIT.png';
import flagDE from '../../assets/flagDE.png';
import flagNL from '../../assets/NL - Netherlands.png';
import flagES from '../../assets/ES - Spain.png';

const COUNTRIES = [
  { name: 'Франція',   src: flagFR, alt: 'Прапор Франції' },
  { name: 'Італія',    src: flagIT, alt: 'Прапор Італії' },
  { name: 'Німеччина', src: flagDE, alt: 'Прапор Німеччини' },
  { name: 'Нідерланди',src: flagNL, alt: 'Прапор Нідерландів' },
  { name: 'Іспанія',   src: flagES, alt: 'Прапор Іспанії' },
];

const { Text } = Typography;

export const ProfileSidebar = () => {
  return (
    <div className={s.wrap}>
      <div className={s.card}>
        <h2 className={s.h}>Обслуговуємо країни</h2>

        <div className={s.countries}>
          {COUNTRIES.map(({ name, src, alt }) => (
            <div className={s.country} key={name}>
              <img className={s.flag} src={src} alt={alt} width={24} height={16} loading="lazy" />
              <Text className={s.countryName}>{name}</Text>
            </div>
          ))}
        </div>

        <button className={s.allBtn} type="button">
          Усі країни <DownOutlined />
        </button>
      </div>

       <div>
        <h2 className={s.h}>Календар поїздок</h2>

        <Button type="primary" icon={<PlusOutlined />} size="large" className={s.buyBtn}>
          Купити квиток
        </Button>

        <div className={s.calendarWrap}>
          <Calendar fullscreen={false} />
        </div>
      </div>
    </div>
  );
}
