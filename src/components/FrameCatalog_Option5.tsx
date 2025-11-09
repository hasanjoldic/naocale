import { useState } from 'react';
import { Check, ShoppingCart } from 'lucide-react';

// OPTION 5: Large Hero Cards
// Visual style: Bold, full-width cards with large imagery
export default function FrameCatalog_Option5() {
  const [selectedFrames, setSelectedFrames] = useState<number[]>([]);

  const frames = [
    {
      id: 1,
      name: 'Classic Aviator',
      price: '120 KM',
      description: 'Ikonični aviator dizajn sa zlatnim metalnim okvirom. Savršen za svaki dan.',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=1200&h=500&fit=crop',
    },
    {
      id: 2,
      name: 'Modern Round',
      price: '95 KM',
      description: 'Savremeni okrugli ram izrađen od kvalitetnog acetata. Udoban i elegantan.',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=1200&h=500&fit=crop',
    },
    {
      id: 3,
      name: 'Vintage Cat-Eye',
      price: '110 KM',
      description: 'Vintage cat-eye stil koji nikada ne izlazi iz mode. Statement komad.',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop',
    },
  ];

  const toggleFrame = (id: number) => {
    if (selectedFrames.includes(id)) {
      setSelectedFrames(selectedFrames.filter((frameId) => frameId !== id));
    } else if (selectedFrames.length < 3) {
      setSelectedFrames([...selectedFrames, id]);
    }
  };

  return (
    <section id="katalog" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Naš katalog
          </h2>
          <div className="flex items-center justify-center gap-4">
            <ShoppingCart className="w-6 h-6 text-teal-300" />
            <p className="text-lg text-white/85">
              {selectedFrames.length} od 3 odabrano
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {frames.map((frame) => {
            const isSelected = selectedFrames.includes(frame.id);
            
            return (
              <div
                key={frame.id}
                className="relative group overflow-hidden"
              >
                <div className="relative h-80 sm:h-96">
                  <img
                    src={frame.image}
                    alt={frame.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-950/95 via-teal-900/80 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-2xl px-8 sm:px-12">
                      <h3 className="text-3xl sm:text-4xl font-serif font-normal text-white mb-3">
                        {frame.name}
                      </h3>
                      <p className="text-white/80 text-base sm:text-lg mb-4 leading-relaxed">
                        {frame.description}
                      </p>
                      <p className="text-4xl font-serif text-teal-300 mb-6">{frame.price}</p>
                      
                      <button
                        onClick={() => toggleFrame(frame.id)}
                        className={`px-8 py-4 flex items-center gap-3 transition-all ${
                          isSelected
                            ? 'bg-teal-600 text-white'
                            : 'bg-white text-teal-900 hover:bg-teal-100'
                        }`}
                      >
                        {isSelected && <Check className="w-5 h-5" />}
                        {isSelected ? 'Odabrano za isprobavanje' : 'Dodaj u selekciju'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
