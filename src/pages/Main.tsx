import React, { useState } from 'react';
import { Layout, Result, Button } from 'antd';
import { HeaderBar, type RouteKey } from '../components/Header';
import { FooterSection } from '../components/FooterSection';
import { Home } from './Home';

const { Content } = Layout;

const UnderConstruction: React.FC<{ title: string; goHome: () => void }> = ({ title, goHome }) => (
  <Result
    status="info"
    title="Сторінка в розробці"
    subTitle={`Розділ «${title}» скоро буде доступний.`}
    extra={<Button type="primary" onClick={goHome}>Повернутися до «Перевізникам»</Button>}
  />
);

export default function Main() {
  const [route, setRoute] = useState<RouteKey>('profile');

  const goProfile = () => setRoute('profile');

  const titles: Record<string, string> = {
    home: 'Головна',
    carriers: 'Перевізникам',
    about: 'Про нас',
    profile: 'Профіль перевізника',
  };

  return (
    <Layout>
      <HeaderBar active={route} onNavigate={(k) => setRoute(k)} />
      <Content style={{ minHeight: '60vh', padding: '24px 0' }}>
        {route === 'profile'
          ? <Home />
          : <UnderConstruction title={titles[route]} goHome={goProfile} />
        }
      </Content>
      <FooterSection />
    </Layout>
  );
}
