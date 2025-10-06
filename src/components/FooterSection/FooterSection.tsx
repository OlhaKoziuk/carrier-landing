import React from 'react';
import { Button, Form, Input, Space, Typography } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from '@ant-design/icons';
import styles from './FooterSection.module.css';
import footerLogo from '../../assets/footerLogo.png';

const { Title, Text } = Typography;

export const FooterSection: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo} aria-label="Sprinters home">
              <img src={footerLogo} alt="logo" width={160} height={30} style={{ objectFit:'contain' }} />
            </a>
            <p className={styles.desc}>
              Платформа пошуку перевізників
              <br /> та бронювання поїздок
            </p>
          </div>

          <nav className={styles.navCol} aria-label="Клієнтам">
            <Title level={5} className={styles.navTitle}>Клієнтам</Title>
            <ul className={styles.links}>
              <li><a href="#">Головна</a></li>
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Ціни</a></li>
              <li><a href="#">Маршрути</a></li>
              <li><a href="#">Політика приватності</a></li>
            </ul>
          </nav>

          <nav className={styles.navCol} aria-label="Перевізникам">
            <Title level={5} className={styles.navTitle}>Перевізникам</Title>
            <ul className={styles.links}>
              <li><a href="#">Help Docs</a></li>
              <li><a href="#">Особистий кабінет</a></li>
              <li><a href="#">Оновлення</a></li>
              <li><a href="#">Контакти</a></li>
            </ul>
          </nav>

          <section className={styles.feedback} aria-labelledby="feedback-title">
            <Title id="feedback-title" level={5} className={styles.navTitle}>
              Зворотній зв’язок
            </Title>
            <p className={styles.note}>
              Маєш пропозиції щодо покращення сервісу — пиши нам!
            </p>

            <Form
              form={form}
              layout="inline"
              className={styles.inlineForm}
              onFinish={(values) => console.log('submit:', values)}
            >
              <Form.Item name="email" className={styles.formItem}
                rules={[
                  { required: true, message: 'Вкажіть email' },
                  { type: 'email', message: 'Некоректний email' },
                ]}
              >
                <Input size="large" placeholder="Email Address" />
              </Form.Item>
              <Form.Item className={styles.formItem}>
                <Button type="primary" htmlType="submit" size="large">
                  Надіслати
                </Button>
              </Form.Item>
            </Form>

            <address className={styles.contacts}>
              <Space size={10} align="center">
                <PhoneOutlined />
                <a href="tel:+380735555555">+38 (073) 555 55 55</a>
              </Space>
              <Space size={10} align="center">
                <MailOutlined />
                <a href="mailto:gmail@gmail.com">gmail@gmail.com</a>
              </Space>
            </address>
          </section>
        </div>

        <div className={styles.separator} aria-hidden="true" />

        <div className={styles.bottomRow}>
          <Text className={styles.copy}>
            2024 © Sprinters. All rights reserved.
          </Text>

          <ul className={styles.socials} aria-label="Соціальні мережі">
            <li>
              <a href="#" aria-label="Facebook">
                <FacebookFilled />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram">
                <InstagramFilled />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <LinkedinFilled />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

