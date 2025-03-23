import React from 'react';
import { 
  Hero, 
  Features, 
  Pricing, 
  Testimonials, 
  CTA, 
  Header,
  FAQ,
  ContactForm
} from '@/components/landing';
import { Footer } from '@/components/layout';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
