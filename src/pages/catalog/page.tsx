import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FrameCatalog from '../../components/FrameCatalog';

export default function CatalogPage() {
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('selectedFrames');
    if (saved) {
      setSelectedCount(JSON.parse(saved).length);
    }
  }, []);

  const handleSelectionChange = (selectedIds: number[]) => {
    setSelectedCount(selectedIds.length);
    localStorage.setItem('selectedFrames', JSON.stringify(selectedIds));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
      <Header cartCount={selectedCount} />
      <FrameCatalog onSelectionChange={handleSelectionChange} />
      <Footer />
    </div>
  );
}
