import React, { useMemo } from 'react';
import { Button, Card, Carousel, Col, Grid, Row, Space, Typography, Avatar, Rate } from 'antd';
import styles from './TestimonialsSection.module.css';
import ben from '../../assets/ben.png';
import craig from '../../assets/craig.png';
const { Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

type Testimonial = {
  id: number;
  name: string;
  city: string;
  date: string;
  avatar: string,
  text: string;
};

const MOCK: Testimonial[] = [
  {
    id: 1,
    name: 'Ben Yardley',
    city: 'Київ • Кишинів',
    date: '1 May 2023',
    avatar: ben,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    id: 2,
    name: 'Craig Martin',
    city: 'Львів • Париж',
    date: '1 May 2023',
    avatar: craig,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
  },
  {
    id: 3,
    name: 'Ben Yardley',
    city: 'Київ • Кишинів',
    date: '1 May 2023',
    avatar: ben,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  },
  {
    id: 4,
    name: 'Craig Martin',
    city: 'Львів • Париж',
    date: '1 May 2023',
    avatar: craig,
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
  },
];

const chunk = <T,>(arr: T[], size: number) =>
  arr.reduce<T[][]>((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);

export const TestimonialsSection: React.FC = () => {
  const screens = useBreakpoint();
  const perSlide = screens.lg ? 2 : 1;
  const slides = useMemo(() => chunk(MOCK, perSlide), [perSlide]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Row gutter={[32, 32]} align="stretch">
          <Col xs={24} lg={8} className={styles.stretchCol}>
            <div className={styles.leftCol}>
              <h3 className={styles.title}>Що <span className={styles.title__accent}>кажуть люди?</span></h3>
              <Paragraph className={styles.lead}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
              <Button type="primary" className={styles.cta}>
                Залишити відгук
              </Button>
            </div>
          </Col>

          <Col xs={24} lg={16} className={styles.stretchCol}>
            <div className={styles.carouselWrap}>
              <Carousel
                dots
                autoplay
                infinite
                draggable
                className={styles.carousel}
              >
                {slides.map((group, idx) => (
                  <div key={idx}>
                    <Row gutter={[24, 24]}>
                      {group.map((item) => (
                        <Col key={item.id} xs={24} md={24 / perSlide}>
                          <Card className={styles.card}>
                            <Space size={16} align="start" style={{ width: '100%' }}>
                              <Avatar src={item.avatar} size={72}></Avatar>
                              <Space direction="vertical" size={4} style={{ width: '100%' }}>
                                <Text className={styles.name}>{item.name}</Text>
                                <Text className={styles.city}>{item.city}</Text>
                                <Text className={styles.meta}>{item.date}</Text>
                              </Space>
                            </Space>

                            <Paragraph className={styles.text}>{item.text}</Paragraph>
                            <Rate disabled defaultValue={5} className={styles.stars} />
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

