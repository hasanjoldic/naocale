import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProcessSteps from '../components/ProcessSteps';
import FrameCatalog from '../components/FrameCatalog';
import TrustSection from '../components/TrustSection';
import Footer from '../components/Footer';

export default function IndexPage() {
  const [selectedFrameIds, setSelectedFrameIds] = useState<number[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-700 via-teal-600 to-teal-500">
      <Header cartCount={selectedFrameIds.length} />
      <Hero />
      <ProcessSteps />
      <FrameCatalog onSelectionChange={setSelectedFrameIds} />
      <TrustSection />
      <Footer />
    </div>
  );
}
