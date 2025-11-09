import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Share2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { cn } from '../../lib/utils';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { frames } from '../../data/frames';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedFrames, setSelectedFrames] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  const frame = frames.find((f) => f.id === Number(id));

  useEffect(() => {
    const saved = localStorage.getItem('selectedFrames');
    if (saved) {
      setSelectedFrames(JSON.parse(saved));
    }
  }, []);

  if (!frame) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-serif mb-4">Proizvod nije pronađen</h1>
          <Link to="/katalog" className="text-teal-300 hover:text-teal-200 underline">
            Povratak na katalog
          </Link>
        </div>
      </div>
    );
  }

  const isSelected = selectedFrames.includes(frame.id);
  const canSelectMore = selectedFrames.length < 3;

  const handleCheckboxChange = (checked: boolean) => {
    let newSelection: number[];

    if (checked && selectedFrames.length < 3) {
      newSelection = [...selectedFrames, frame.id];
    } else if (!checked) {
      newSelection = selectedFrames.filter((id) => id !== frame.id);
    } else {
      return;
    }

    setSelectedFrames(newSelection);
    localStorage.setItem('selectedFrames', JSON.stringify(newSelection));
  };

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: frame.name,
          text: `Pogledaj ${frame.name} - ${frame.price} KM`,
          url: url,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
      <Header cartCount={selectedFrames.length} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Nazad
        </button>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 overflow-hidden">
            <img
              src={frame.image}
              alt={frame.name}
              className="w-full h-96 lg:h-[600px] object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
              {frame.name}
            </h1>

            <div className="flex gap-2 mb-6">
              <span className="px-3 py-1 bg-teal-800/40 text-white/90 text-sm font-medium border border-teal-200/20">
                {frame.shape}
              </span>
              <span className="px-3 py-1 bg-teal-800/40 text-white/90 text-sm font-medium border border-teal-200/20">
                {frame.color}
              </span>
            </div>

            <p className="text-3xl sm:text-4xl font-serif text-teal-300 mb-6">
              {frame.price} KM
            </p>

            <p className="text-white/85 text-lg leading-relaxed mb-8">
              {frame.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-serif text-white mb-4">Karakteristike</h3>
              <ul className="space-y-2">
                {frame.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/85">
                    <Check className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Selection */}
            <div className="bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white text-sm">
                  Odabrano: {selectedFrames.length}/3
                </span>
              </div>

              <Checkbox.Root
                checked={isSelected}
                onCheckedChange={handleCheckboxChange}
                disabled={!isSelected && !canSelectMore}
                className={cn(
                  'flex items-center gap-3 w-full p-4 border transition-all',
                  isSelected
                    ? 'bg-teal-700/50 border-teal-400'
                    : 'bg-teal-900/40 border-teal-200/20 hover:border-teal-200/40',
                  !isSelected && !canSelectMore && 'opacity-50 cursor-not-allowed'
                )}
              >
                <div className="w-6 h-6 border-2 border-white flex items-center justify-center bg-transparent">
                  <Checkbox.Indicator>
                    <Check className="w-5 h-5 text-white" />
                  </Checkbox.Indicator>
                </div>
                <span className="text-white font-medium">
                  {isSelected ? 'Odabrano za pokušaj' : canSelectMore ? 'Dodaj u selekciju' : 'Maksimum 3 rama'}
                </span>
              </Checkbox.Root>
            </div>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 w-full py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-teal-900 transition-all"
            >
              <Share2 className="w-5 h-5" />
              {copied ? 'Link kopiran!' : 'Podijeli proizvod'}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
