import { useState } from 'react';
import { Check } from 'lucide-react';

// OPTION 2: Horizontal Scrolling Cards
// Visual style: Side-scrolling product carousel
export default function FrameCatalog_Option2() {
  const [selectedFrames, setSelectedFrames] = useState<number[]>([]);

  const frames = [
    {
      id: 1,
      name: 'Classic Aviator',
      price: '120 KM',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Modern Round',
      price: '95 KM',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Vintage Cat-Eye',
      price: '110 KM',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'Square Frames',
      price: '105 KM',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
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
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Naš katalog
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light mb-2">
            Prevucite za više opcija
          </p>
          <p className="text-teal-300 font-semibold">
            Odabrano: {selectedFrames.length}/3
          </p>
        </div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max">
            {frames.map((frame) => {
              const isSelected = selectedFrames.includes(frame.id);
              
              return (
                <div
                  key={frame.id}
                  className="w-80 flex-shrink-0 bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 hover:border-teal-200/30 transition-all overflow-hidden group"
                >
                  <div className="relative bg-teal-950 h-64 overflow-hidden">
                    <img
                      src={frame.image}
                      alt={frame.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-white mb-2">{frame.name}</h3>
                    <p className="text-2xl font-serif text-teal-300 mb-4">{frame.price}</p>
                    
                    <button
                      onClick={() => toggleFrame(frame.id)}
                      className={`w-full py-3 flex items-center justify-center gap-2 transition-all ${
                        isSelected
                          ? 'bg-teal-600 text-white'
                          : 'bg-teal-900/40 border border-teal-200/20 text-white hover:bg-teal-800/60'
                      }`}
                    >
                      {isSelected && <Check className="w-5 h-5" />}
                      {isSelected ? 'Odabrano' : 'Odaberi'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
