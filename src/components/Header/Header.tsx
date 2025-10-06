import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Layout, Menu, Button, Drawer, Space } from 'antd';
import { MenuOutlined, LoginOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png';
import s from './Header.module.css';

const { Header } = Layout;

export type RouteKey = 'home' | 'carriers' | 'about' | 'profile';

type Props = {
  active?: RouteKey;
  onNavigate?: (key: RouteKey) => void;
  onLogin?: () => void;
  onCreateProfile?: () => void;
};

const NAV_ITEMS = [
  { key: 'home', label: 'Головна' },
  { key: 'carriers', label: 'Перевізникам' },
  { key: 'about', label: 'Про нас' },
  { key: 'profile', label: 'Профіль перевізника' },
] as const;

function useBelow(px: number) {
  const isClient = typeof window !== 'undefined';
  const [below, setBelow] = React.useState(() => (isClient ? window.innerWidth <= px : false));

  React.useEffect(() => {
    if (!isClient) return;
    const onResize = () => setBelow(window.innerWidth <= px);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [px, isClient]);

  return below;
}

export const HeaderBar: React.FC<Props> = ({
  active = 'profile',
  onNavigate,
  onLogin,
  onCreateProfile,
}) => {
  const isMobile = useBelow(1000);

  const [activeKey, setActiveKey] = useState<typeof active>(active);
  useEffect(() => setActiveKey(active), [active]);

  const centerRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => NAV_ITEMS.map(i => ({ key: i.key, label: i.label })), []);

  const updateUnderline = () => {
    if (!centerRef.current || !underlineRef.current) return;
    const container = centerRef.current.querySelector('.ant-menu') as HTMLElement | null;
    if (!container) return;

    const el = container.querySelector<HTMLElement>('.ant-menu-item-selected');
    if (!el) {
      underlineRef.current.style.opacity = '0';
      return;
    }

    const cRect = container.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const left = r.left - cRect.left;
    const width = r.width;

    underlineRef.current.style.opacity = '1';
    underlineRef.current.style.width = `${Math.max(24, width * 0.6)}px`;
    underlineRef.current.style.transform = `translateX(${left + width * 0.2}px)`;
  };

  useEffect(() => {
    if (isMobile) return;
    const raf = requestAnimationFrame(updateUnderline);
    const onResize = () => updateUnderline();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [activeKey, isMobile]);

  const [open, setOpen] = useState(false);

  const handleNavigate = (key: RouteKey) => {
    setActiveKey(key);
    onNavigate?.(key);
    setTimeout(updateUnderline, 0);
  };

  const menu = (
    <Menu
      mode={isMobile ? 'inline' : 'horizontal'}
      selectedKeys={[activeKey]}
      items={items}
      onClick={({ key }) => {
        handleNavigate(key as RouteKey);
        if (isMobile) setOpen(false);
      }}
      className={s.menu}
    />
  );

  return (
    <>
      <Header className={s.header}>
        <div
          className={s.logo}
          role="button"
          tabIndex={0}
          onClick={() => handleNavigate('profile')}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavigate('profile')}
        >
          <img src={logo} alt="Logo" className={s.logoImg} />
        </div>

        {!isMobile && (
          <div className={s.center} ref={centerRef}>
            {menu}
            <div ref={underlineRef} className={s.activeBar} />
          </div>
        )}

        <div className={s.actions}>
          {!isMobile && (
            <a className={s.createLink} onClick={() => onCreateProfile?.()}>
              Створити профіль
            </a>
          )}
          {!isMobile ? (
            <Button
              type="primary"
              size="large"
              icon={<LoginOutlined />}
              onClick={() => onLogin?.()}
            >
              Увійти
            </Button>
          ) : (
            <Button
              type="text"
              aria-label="menu"
              icon={<MenuOutlined />}
              onClick={() => setOpen(true)}
              className={s.burger}
            />
          )}
        </div>
      </Header>

      <Drawer
        placement="left"
        open={open}
        onClose={() => setOpen(false)}
        className={s.drawer}
        afterOpenChange={() => setTimeout(updateUnderline, 0)}
      >
        <div className={s.drawerHeader}>
          <Space size={8} align="center">
            <img src={logo} alt="Logo" className={s.logoImg} />
            <span className={s.drawerTitle}>sprinters</span>
          </Space>
        </div>
        {menu}
        <div className={s.drawerActions}>
          <button className={s.createLink} onClick={onCreateProfile}>
            Створити профіль
          </button>
          <Button type="primary" size="large" icon={<LoginOutlined />} onClick={onLogin} block>
            Увійти
          </Button>
        </div>
      </Drawer>
    </>
  );
};

