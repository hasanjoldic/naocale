import { useState } from 'react';
import { Check, Plus } from 'lucide-react';

// OPTION 4: Minimal List with Side Images
// Visual style: Clean list format with horizontal layout
export default function FrameCatalog_Option4() {
  const [selectedFrames, setSelectedFrames] = useState<number[]>([]);

  const frames = [
    {
      id: 1,
      name: 'Classic Aviator',
      price: '120 KM',
      description: 'Vremenski model sa zlatnim okvirom',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Modern Round',
      price: '95 KM',
      description: 'Savremeni okrugli ram za svaki dan',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Vintage Cat-Eye',
      price: '110 KM',
      description: 'Elegantni vintage dizajn',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Naš katalog
          </h2>
          <div className="inline-block bg-teal-800/40 border border-teal-200/30 px-6 py-2">
            <p className="text-white">Odabrano: {selectedFrames.length}/3</p>
          </div>
        </div>

        <div className="space-y-4">
          {frames.map((frame) => {
            const isSelected = selectedFrames.includes(frame.id);
            
            return (
              <div
                key={frame.id}
                className={`bg-teal-900/60 backdrop-blur-sm border transition-all ${
                  isSelected ? 'border-teal-400' : 'border-teal-200/20 hover:border-teal-200/30'
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-6 p-6">
                  {/* Image */}
                  <div className="w-full sm:w-48 h-48 flex-shrink-0 bg-teal-950 overflow-hidden">
                    <img
                      src={frame.image}
                      alt={frame.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-serif font-normal text-white mb-2">
                        {frame.name}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">{frame.description}</p>
                      <p className="text-3xl font-serif text-teal-300">{frame.price}</p>
                    </div>
                    
                    <button
                      onClick={() => toggleFrame(frame.id)}
                      className={`self-start mt-4 px-6 py-3 flex items-center gap-2 transition-all ${
                        isSelected
                          ? 'bg-teal-600 text-white'
                          : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-900'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-5 h-5" />
                          Odabrano
                        </>
                      ) : (
                        <>
                          <Plus className="w-5 h-5" />
                          Odaberi
                        </>
                      )}
                    </button>
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
