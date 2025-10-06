import React from 'react';
import { CarrierProfileHeader } from '../../components/CarrierProfileHeader';
import { ProfileSection } from '../../components/ProfileSection';
import { DriversSection } from '../../components/DriversSection';
import { ServiceFeatures } from '../../components/ServiceFeatures';
import { TestimonialsSection } from '../../components/TestimonialsSection';

export const Home: React.FC = () => {
  return (
    <div>
      <CarrierProfileHeader />
      <ProfileSection />
      <DriversSection />
      <ServiceFeatures />
      <TestimonialsSection />
    </div>
  )
}
