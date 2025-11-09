import { useState } from 'react';
import { Check, Eye, X } from 'lucide-react';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../lib/utils';

interface Frame {
  id: number;
  name: string;
  image: string;
  shape: string;
  color: string;
  price: number;
  description: string;
  features: string[];
}

interface FrameCatalogProps {
  onSelectionChange?: (selectedIds: number[]) => void;
}

export default function FrameCatalog({ onSelectionChange }: FrameCatalogProps) {
  const [selectedFrames, setSelectedFrames] = useState<number[]>([]);
  const [dialogFrame, setDialogFrame] = useState<Frame | null>(null);

  const frames: Frame[] = [
    {
      id: 1,
      name: 'Moderna Crna',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400&auto=format&fit=crop',
      shape: 'Pravougaonik',
      color: 'Crna',
      price: 149,
      description: 'Elegantne pravougaone naočale sa crnim okvirom. Savršen izbor za profesionalan izgled.',
      features: ['Lagane i izdržljive', 'Hipoalergenske', 'UV zaštita'],
    },
    {
      id: 2,
      name: 'Retro Okrugla',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&auto=format&fit=crop',
      shape: 'Okrugla',
      color: 'Zlatna',
      price: 179,
      description: 'Vintage okrugle naočale sa zlatnim okvirom. Idealne za kreativne i moderne ličnosti.',
      features: ['Retro dizajn', 'Premium materijali', 'Fleksibilne'],
    },
    {
      id: 3,
      name: 'Klasik Tortoise',
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=400&auto=format&fit=crop',
      shape: 'Aviator',
      color: 'Tortoise',
      price: 159,
      description: 'Klasične aviator naočale sa tortoise dezenom. Bezvremenska elegancija.',
      features: ['Klasičan stil', 'Udobne', 'Visoka kvaliteta'],
    },
    {
      id: 4,
      name: 'Elegantna Plava',
      image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=400&auto=format&fit=crop',
      shape: 'Cat-eye',
      color: 'Plava',
      price: 169,
      description: 'Sofisticirane cat-eye naočale u plavoj boji. Dodajte šmek vašem stilu.',
      features: ['Moderan dizajn', 'Lagane', 'Stilske'],
    },
    {
      id: 5,
      name: 'Sportska Siva',
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=400&auto=format&fit=crop',
      shape: 'Pravougaonik',
      color: 'Siva',
      price: 139,
      description: 'Sportske pravougaone naočale u sivoj boji. Savršene za aktivan život.',
      features: ['Sportski dizajn', 'Otporne', 'Fleksibilne'],
    },
    {
      id: 6,
      name: 'Vintage Braon',
      image: 'https://images.unsplash.com/photo-1509695507497-903c140c4e67?q=80&w=400&auto=format&fit=crop',
      shape: 'Okrugla',
      color: 'Braon',
      price: 189,
      description: 'Vintage okrugle naočale u braon boji. Za ljubitelje retro stila.',
      features: ['Vintage stil', 'Premium kvalitet', 'Unikatne'],
    },
  ];

  const handleCheckboxChange = (frameId: number, checked: boolean) => {
    setSelectedFrames((prev) => {
      let newSelection: number[];

      if (checked && prev.length < 3) {
        newSelection = [...prev, frameId];
      } else if (!checked) {
        newSelection = prev.filter((id) => id !== frameId);
      } else {
        return prev;
      }

      onSelectionChange?.(newSelection);
      return newSelection;
    });
  };

  const isSelected = (frameId: number) => selectedFrames.includes(frameId);
  const canSelectMore = selectedFrames.length < 3;

  return (
    <section id="katalog" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Naš katalog
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            Odaberite 3 rama koja želite isprobati kod kuće
          </p>
        </div>

        {/* Sticky Selection Counter */}
        <div className="sticky top-20 z-40 mb-8 flex justify-center">
          <div className="bg-teal-900/80 backdrop-blur-sm text-white px-6 py-3 border border-teal-200/20">
            <span className="text-sm font-medium">
              {selectedFrames.length}/3 odabrano
            </span>
          </div>
        </div>

        {/* Frames Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {frames.map((frame) => {
            const selected = isSelected(frame.id);

            return (
              <div
                key={frame.id}
                className={cn(
                  'bg-teal-900/60 backdrop-blur-sm overflow-hidden border transition-all duration-300',
                  selected
                    ? 'border-teal-400 shadow-lg'
                    : 'border-teal-200/20 hover:border-teal-200/30'
                )}
              >
                {/* Image */}
                <div className="relative bg-teal-950 group overflow-hidden">
                  <img
                    src={frame.image}
                    alt={frame.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/30 via-transparent to-transparent opacity-60"></div>

                  {/* Quick View Button */}
                  <button
                    onClick={() => setDialogFrame(frame)}
                    className="absolute inset-0 bg-teal-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <Eye className="w-7 h-7 text-white" />
                    <span className="ml-2 text-white font-medium">Pogledaj detalje</span>
                  </button>

                  {/* Checkbox */}
                  <div className="absolute top-4 right-4">
                    <Checkbox.Root
                      checked={selected}
                      onCheckedChange={(checked) => handleCheckboxChange(frame.id, checked === true)}
                      disabled={!selected && !canSelectMore}
                      className={cn(
                        "w-7 h-7 rounded flex items-center justify-center border transition-all",
                        selected
                          ? "bg-teal-400 border-teal-400"
                          : "bg-teal-950/80 border-white/40 hover:border-white/60",
                        !selected && !canSelectMore && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-teal-950" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-normal text-white mb-3">
                    {frame.name}
                  </h3>

                  {/* Badges */}
                  <div className="flex gap-2 mb-4">
                    <span className="px-2 py-1 bg-teal-800/40 text-white/90 text-xs font-medium border border-teal-200/20">
                      {frame.shape}
                    </span>
                    <span className="px-2 py-1 bg-teal-800/40 text-white/90 text-xs font-medium border border-teal-200/20">
                      {frame.color}
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-xl font-semibold text-white mb-4">
                    {frame.price} KM
                  </p>

                  {/* View Details Button */}
                  <button
                    onClick={() => setDialogFrame(frame)}
                    className="w-full mb-2 py-2 px-4 rounded text-sm font-medium text-white border border-white/30 hover:bg-teal-900/40 hover:border-white/50 transition-colors"
                  >
                    Pogledaj detalje
                  </button>

                  {/* Selection Status */}
                  <p className="text-center text-xs text-white/60">
                    {selected ? '✓ Odabrano' : canSelectMore ? 'Klikni na ✓ gore' : 'Maksimum 3 rama'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Button */}
        {selectedFrames.length === 3 && (
          <div className="mt-12 text-center">
            <button className="bg-teal-950/80 hover:bg-teal-950 text-white font-medium text-base px-10 py-3 rounded border border-white/20 hover:border-white/30 transition-all duration-300">
              Naruči pokušaj
            </button>
          </div>
        )}
      </div>

      {/* Frame Details Dialog */}
      <Dialog.Root open={!!dialogFrame} onOpenChange={(open) => !open && setDialogFrame(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
          <Dialog.Content
            className={cn(
              "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
              "bg-teal-900/95 backdrop-blur-md shadow-2xl border border-teal-200/20",
              "w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto",
              "p-6"
            )}
          >
            {dialogFrame && (
              <>
                <Dialog.Close asChild>
                  <button
                    className="absolute top-4 right-4 p-2 hover:bg-teal-800/50 transition-colors"
                    aria-label="Zatvori"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </Dialog.Close>

                <Dialog.Title className="text-2xl font-serif font-normal text-white mb-4">
                  {dialogFrame.name}
                </Dialog.Title>

                <div className="relative overflow-hidden mb-6">
                  <img
                    src={dialogFrame.image}
                    alt={dialogFrame.name}
                    className="w-full h-64 object-cover"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/30 via-transparent to-transparent opacity-50"></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif font-normal text-white mb-2 text-base">Opis</h3>
                    <p className="text-white/85 text-sm leading-relaxed">{dialogFrame.description}</p>
                  </div>

                  <div>
                    <h3 className="font-serif font-normal text-white mb-2 text-base">Karakteristike</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {dialogFrame.features.map((feature, idx) => (
                        <li key={idx} className="text-white/85 text-sm">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-teal-800/40 text-white/90 text-xs font-medium border border-teal-200/20">
                      {dialogFrame.shape}
                    </span>
                    <span className="px-2 py-1 bg-teal-800/40 text-white/90 text-xs font-medium border border-teal-200/20">
                      {dialogFrame.color}
                    </span>
                  </div>

                  <p className="text-2xl font-serif font-normal text-white">
                    {dialogFrame.price} KM
                  </p>

                  <div className="flex items-center gap-3">
                    <Checkbox.Root
                      checked={isSelected(dialogFrame.id)}
                      onCheckedChange={(checked) => handleCheckboxChange(dialogFrame.id, checked === true)}
                      disabled={!isSelected(dialogFrame.id) && !canSelectMore}
                      className={cn(
                        "w-8 h-8 flex items-center justify-center border transition-all",
                        isSelected(dialogFrame.id)
                          ? "bg-teal-400 border-teal-400"
                          : "bg-teal-950/80 border-white/40 hover:border-white/60",
                        !isSelected(dialogFrame.id) && !canSelectMore && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <Checkbox.Indicator>
                        <Check className="w-5 h-5 text-teal-950" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <span className="text-white/85 font-normal text-sm">
                      {isSelected(dialogFrame.id) ? 'Odabrano za pokušaj' : canSelectMore ? 'Dodaj u selekciju' : 'Maksimum 3 rama'}
                    </span>
                  </div>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
