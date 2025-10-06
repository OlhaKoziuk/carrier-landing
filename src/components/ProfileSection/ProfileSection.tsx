import React from 'react';
import s from './ProfileSection.module.css';
import { ProfileAbout } from '../ProfileAbout';
import { ProfileSidebar } from '../ProfileSidebar';

export const ProfileSection: React.FC = () => {
  return (
    <section className={s.section}>
      <div className={s.grid}>
        <div className={s.main}>
          <ProfileAbout />
        </div>
        <div className={s.sidebar}>
          <ProfileSidebar />
        </div>
      </div>
    </section>
  );
}
