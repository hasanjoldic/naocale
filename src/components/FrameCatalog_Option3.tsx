import { useState } from 'react';
import { Check } from 'lucide-react';

// OPTION 3: Masonry/Pinterest Style Layout
// Visual style: Staggered grid with varying heights
export default function FrameCatalog_Option3() {
  const [selectedFrames, setSelectedFrames] = useState<number[]>([]);

  const frames = [
    {
      id: 1,
      name: 'Classic Aviator',
      price: '120 KM',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop',
      tall: true,
    },
    {
      id: 2,
      name: 'Modern Round',
      price: '95 KM',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop',
      tall: false,
    },
    {
      id: 3,
      name: 'Vintage Cat-Eye',
      price: '110 KM',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
      tall: false,
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
          <p className="text-lg text-white/85 mb-2">
            Odabrano: {selectedFrames.length}/3
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {frames.map((frame) => {
            const isSelected = selectedFrames.includes(frame.id);
            
            return (
              <div
                key={frame.id}
                className="break-inside-avoid mb-6 bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 hover:border-teal-200/30 transition-all overflow-hidden group"
              >
                <div className="relative bg-teal-950 overflow-hidden">
                  <img
                    src={frame.image}
                    alt={frame.name}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      frame.tall ? 'h-96' : 'h-64'
                    }`}
                  />
                  {isSelected && (
                    <div className="absolute top-4 right-4 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif text-white mb-2">{frame.name}</h3>
                  <p className="text-2xl font-serif text-teal-300 mb-4">{frame.price}</p>
                  
                  <button
                    onClick={() => toggleFrame(frame.id)}
                    className="w-full py-3 bg-teal-900/40 border border-teal-200/20 text-white hover:bg-teal-800/60 transition-all"
                  >
                    {isSelected ? 'Ukloni' : 'Dodaj u selekciju'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
