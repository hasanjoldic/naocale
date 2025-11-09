import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, X } from 'lucide-react';
import { cn } from '../lib/utils';

// OPTION 1: Grid with Large Images
// Visual style: Clean grid with focus on product photography
export default function FrameCatalog_Option1() {
  const [selectedFrames, setSelectedFrames] = useState<number[]>([]);
  const [dialogFrame, setDialogFrame] = useState<any>(null);

  const frames = [
    {
      id: 1,
      name: 'Classic Aviator',
      price: '120 KM',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
      color: 'Gold',
      material: 'Metal',
    },
    {
      id: 2,
      name: 'Modern Round',
      price: '95 KM',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=600&h=400&fit=crop',
      color: 'Black',
      material: 'Acetate',
    },
    {
      id: 3,
      name: 'Vintage Cat-Eye',
      price: '110 KM',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
      color: 'Tortoise',
      material: 'Acetate',
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
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            Odaberite do 3 rama koje želite isprobati ({selectedFrames.length}/3)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frames.map((frame) => {
            const isSelected = selectedFrames.includes(frame.id);
            const canSelect = selectedFrames.length < 3 || isSelected;

            return (
              <div
                key={frame.id}
                className="group relative bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 hover:border-teal-200/30 transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="relative bg-teal-950 overflow-hidden aspect-[4/3]">
                  <img
                    src={frame.image}
                    alt={frame.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-normal text-white mb-2">
                    {frame.name}
                  </h3>
                  <p className="text-2xl font-serif text-teal-300 mb-4">{frame.price}</p>
                  
                  <div className="flex gap-4 text-sm text-white/70 mb-4">
                    <span>{frame.color}</span>
                    <span>•</span>
                    <span>{frame.material}</span>
                  </div>

                  <button
                    onClick={() => setDialogFrame(frame)}
                    className="text-white/80 hover:text-white text-sm underline mb-4"
                  >
                    Vidi detalje
                  </button>

                  {/* Checkbox */}
                  <Checkbox.Root
                    checked={isSelected}
                    onCheckedChange={() => toggleFrame(frame.id)}
                    disabled={!canSelect}
                    className={cn(
                      'flex items-center gap-3 w-full p-3 border transition-all',
                      isSelected
                        ? 'bg-teal-700/50 border-teal-400'
                        : 'bg-teal-900/40 border-teal-200/20 hover:border-teal-200/40',
                      !canSelect && !isSelected && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    <div className="w-5 h-5 border-2 border-white flex items-center justify-center bg-transparent">
                      <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-white" />
                      </Checkbox.Indicator>
                    </div>
                    <span className="text-white text-sm">
                      {isSelected ? 'Odabrano' : 'Odaberi za isprobavanje'}
                    </span>
                  </Checkbox.Root>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dialog */}
      <Dialog.Root open={!!dialogFrame} onOpenChange={() => setDialogFrame(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-900/95 backdrop-blur-md border border-teal-200/20 p-6 sm:p-8 max-w-2xl w-[90vw] max-h-[90vh] overflow-y-auto z-50">
            {dialogFrame && (
              <>
                <Dialog.Close className="absolute top-4 right-4 text-white/60 hover:text-white">
                  <X className="w-6 h-6" />
                </Dialog.Close>
                <h2 className="text-3xl font-serif font-normal text-white mb-6">{dialogFrame.name}</h2>
                <img src={dialogFrame.image} alt={dialogFrame.name} className="w-full h-64 object-cover mb-6" />
                <p className="text-2xl font-serif text-teal-300 mb-4">{dialogFrame.price}</p>
                <div className="text-white/80 space-y-2">
                  <p><strong>Boja:</strong> {dialogFrame.color}</p>
                  <p><strong>Materijal:</strong> {dialogFrame.material}</p>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
