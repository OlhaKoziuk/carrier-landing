import React from 'react';
import s from './CarrierProfileHeader.module.css';
import logo from '../../assets/stripe_logo.png';
import { Breadcrumb } from 'antd';
import { GlobalOutlined, PhoneOutlined } from '@ant-design/icons';
import { StatBadges } from '../StatBadges';

export const CarrierProfileHeader: React.FC = ()=> {
  return (
    <div className={s.section}>
      <div className={s.profile}>
        <Breadcrumb className={s.breadcrumb}
          items={[
            { title: 'Головна' },
            { title: 'Профілі перевізників' },
            { title: 'Stripe' },
          ]}
        />
        <div className={s.container}>
          <div>
            <img src={logo} alt="Logo" className={s.logoImg} />
          </div>

          <div>
            <div className={s.title__container}>
              <h2 className={s.title}>Stripe</h2>
              <div className={s.title__tag}>43 Поїздок</div>
            </div>

            <div>
              <address className={s.address}>
                <ul className={s.list}>
                  <li className={s.item}>
                    <span className={s.icon} aria-hidden="true">
                      <GlobalOutlined style={{color: 'var(--style-accent)'}}/>
                    </span>
                    <a
                      className={s.link}
                      href="https://stripe.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://stripe.com
                    </a>
                  </li>
              
                  <li className={s.item}>
                    <span className={s.icon} aria-hidden="true">
                      <PhoneOutlined style={{color: 'var(--style-accent)'}}/>
                    </span>
                    <a className={s.link} href="+38 (073) 555 55 55">
                      +38 (073) 555 55 55
                    </a>
                  </li>
                </ul>
              </address>
            </div>

            <StatBadges />
          </div>
        </div>
      </div>
    </div>
  )
}