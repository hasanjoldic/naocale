import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import CatalogPreview from '../components/CatalogPreview';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';

export default function IndexPage() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('selectedFrames');
    if (saved) {
      setCartCount(JSON.parse(saved).length);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-700 via-teal-600 to-teal-500">
      <Header cartCount={cartCount} />
      <Hero />
      <ProcessSteps />
      <CatalogPreview />
      <TrustSection />
      <Footer />
    </div>
  );
}
