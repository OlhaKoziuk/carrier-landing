import React from 'react';
import s from './DriversSection.module.css';
import user from '../../assets/user.png';
import julia from '../../assets/julia.png';
import { Avatar } from 'antd';

export const DriversSection: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.head}>
        <h2 className={s.title}>Наші водії</h2>
        <a href="#" className={s.allLink}>Усі водії (7)</a>
      </div>

      <div className={s.grid}>
        <article className={s.card}>
          <div className={s.avatar}>
            <Avatar
              src={user}
              size={80}
              alt="userPhoto"
              className={s.avatar}
            />
          </div>
          <div className={s.name}>Олександр</div>
          <div className={s.meta}>Досвід роботи: 5 років</div>
          <div className={s.socials}>
            <span className={s.icoStub} aria-hidden="true" />
            <span className={s.icoStub} aria-hidden="true" />
          </div>
        </article>

        <article className={s.card}>
          <Avatar
            src={user}
            size={80}
            alt="userPhoto"
            className={s.avatar}
          />
          <div className={s.name}>Володимир</div>
          <div className={s.meta}>Досвід роботи: 7 років</div>
          <div className={s.socials}>
            <span className={s.icoStub} />
            <span className={s.icoStub} />
          </div>
        </article>

        <article className={s.card}>
          <Avatar
            src={user}
            size={80}
            alt="userPhoto"
            className={s.avatar}
          />
          <div className={s.name}>Ірина</div>
          <div className={s.meta}>Досвід роботи: 1 рік</div>
          <div className={s.socials}>
            <span className={s.icoStub} />
            <span className={s.icoStub} />
          </div>
        </article>

        <article className={s.card}>
          <Avatar
            src={user}
            size={80}
            alt="userPhoto"
            className={s.avatar}
          />
          <div className={s.name}>Михайло</div>
          <div className={s.meta}>Досвід роботи: 1 рік</div>
          <div className={s.socials}>
            <span className={s.icoStub} />
            <span className={s.icoStub} />
          </div>
        </article>

        <article className={s.card}>
          <Avatar
            src={julia}
            size={80}
            alt="userPhoto"
            className={s.avatar}
          />
          <div className={s.name}>Юлія</div>
          <div className={s.meta}>Досвід роботи: 2 роки</div>
          <div className={s.socials}>
            <span className={s.icoStub} />
            <span className={s.icoStub} />
          </div>
        </article>
      </div>
    </section>
  );
}
