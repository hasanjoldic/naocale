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
    <section id="katalog" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Naš katalog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Odaberite 3 rama koja želite isprobati kod kuće
          </p>
        </div>

        {/* Sticky Selection Counter */}
        <div className="sticky top-20 z-40 mb-8 flex justify-center">
          <div className="bg-white border-2 border-blue-600 rounded-sm px-6 py-3 shadow-lg">
            <span className="text-sm font-semibold text-gray-900">
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
                  'bg-white rounded-md overflow-hidden border-2 transition-all duration-300',
                  selected
                    ? 'border-blue-600 shadow-xl '
                    : 'border-gray-200 hover:shadow-lg'
                )}
              >
                {/* Image */}
                <div className="relative bg-gray-100 group">
                  <img
                    src={frame.image}
                    alt={frame.name}
                    className="w-full h-64 object-cover"
                  />

                  {/* Quick View Button */}
                  <button
                    onClick={() => setDialogFrame(frame)}
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  >
                    <Eye className="w-8 h-8 text-white" />
                    <span className="ml-2 text-white font-semibold">Pogledaj detalje</span>
                  </button>

                  {/* Checkbox */}
                  <div className="absolute top-4 right-4">
                    <Checkbox.Root
                      checked={selected}
                      onCheckedChange={(checked) => handleCheckboxChange(frame.id, checked === true)}
                      disabled={!selected && !canSelectMore}
                      className={cn(
                        "w-8 h-8 rounded-sm flex items-center justify-center border-2 transition-all",
                        selected
                          ? "bg-blue-600 border-blue-600"
                          : "bg-white border-gray-300 hover:border-blue-600",
                        !selected && !canSelectMore && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <Checkbox.Indicator>
                        <Check className="w-5 h-5 text-white" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {frame.name}
                  </h3>

                  {/* Badges */}
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-sm">
                      {frame.shape}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-sm">
                      {frame.color}
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-2xl font-bold text-gray-900 mb-4">
                    {frame.price} KM
                  </p>

                  {/* View Details Button */}
                  <button
                    onClick={() => setDialogFrame(frame)}
                    className="w-full mb-2 py-2 px-4 rounded font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    Pogledaj detalje
                  </button>

                  {/* Selection Status */}
                  <p className="text-center text-sm text-gray-600">
                    {selected ? '✓ Odabrano' : canSelectMore ? 'Klikni na ✓ gore' : 'Maksimum 3 rama'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Button */}
        {selectedFrames.length === 3 && (
          <div className="mt-12 text-center ">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-4 rounded shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:">
              Naruči pokušaj
            </button>
          </div>
        )}
      </div>

      {/* Frame Details Dialog */}
      <Dialog.Root open={!!dialogFrame} onOpenChange={(open) => !open && setDialogFrame(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
          <Dialog.Content
            className={cn(
              "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
              "bg-white rounded-md shadow-2xl",
              "w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto",
              "p-6"
            )}
          >
            {dialogFrame && (
              <>
                <Dialog.Close asChild>
                  <button
                    className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100 transition-colors"
                    aria-label="Zatvori"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </Dialog.Close>

                <Dialog.Title className="text-2xl font-bold text-gray-900 mb-4">
                  {dialogFrame.name}
                </Dialog.Title>

                <img
                  src={dialogFrame.image}
                  alt={dialogFrame.name}
                  className="w-full h-64 object-cover rounded mb-6"
                />

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Opis</h3>
                    <p className="text-gray-600">{dialogFrame.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Karakteristike</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {dialogFrame.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-sm">
                      {dialogFrame.shape}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-sm">
                      {dialogFrame.color}
                    </span>
                  </div>

                  <p className="text-3xl font-bold text-gray-900">
                    {dialogFrame.price} KM
                  </p>

                  <div className="flex items-center gap-3">
                    <Checkbox.Root
                      checked={isSelected(dialogFrame.id)}
                      onCheckedChange={(checked) => handleCheckboxChange(dialogFrame.id, checked === true)}
                      disabled={!isSelected(dialogFrame.id) && !canSelectMore}
                      className={cn(
                        "w-10 h-10 rounded flex items-center justify-center border-2 transition-all",
                        isSelected(dialogFrame.id)
                          ? "bg-blue-600 border-blue-600"
                          : "bg-white border-gray-300 hover:border-blue-600",
                        !isSelected(dialogFrame.id) && !canSelectMore && "opacity-50 cursor-not-allowed"
                      )}
                    >
                      <Checkbox.Indicator>
                        <Check className="w-6 h-6 text-white" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                    <span className="text-gray-700 font-medium">
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
