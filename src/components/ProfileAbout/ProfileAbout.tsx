import { Typography, Space, Button } from 'antd';
import { TwitterOutlined, FacebookFilled } from '@ant-design/icons';
import bus1 from '../../assets/bus1.png';
import bus2 from '../../assets/bus2.png';
import bus3 from '../../assets/bus3.png';
import s from './ProfileAbout.module.css';

const { Paragraph } = Typography;

export const ProfileAbout = () => {
  return (
    <div className={s.wrap}>
      <h2 className={s.h2}>Опис перевізника</h2>

      <div className={s.text}>
        <Paragraph>
         Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.
        </Paragraph>
      </div>

      <h2 className={s.h2}>Ми у соц. мережах</h2>
      <Space size={12} wrap className={s.socials}>
        <Button icon={<TwitterOutlined />} className={s.socialBtn}>
          twitter.com/stripe
        </Button>
        <Button icon={<FacebookFilled />} className={s.socialBtn}>
          facebook.com/StripeHQ
        </Button>
      </Space>

      <div className={s.gallery}>
        <div className={s.imgStub} style={{ backgroundImage: `url(${bus1})` }} />
        <div className={s.imgStub} style={{ backgroundImage: `url(${bus2})` }} />
        <div className={s.imgStub} style={{ backgroundImage: `url(${bus3})` }} />
      </div>
    </div>
  );
}
