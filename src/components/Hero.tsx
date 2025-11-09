import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('katalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600 py-24 sm:py-32 flex items-center overflow-hidden min-h-[60vh] grain">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white mb-6 leading-tight">
            Probajte 3 rama besplatno kod kuće
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Odaberite omiljene rame, primite ih kući, isprobajte i odlučite. Jednostavno, povoljno i bez obaveza.
          </p>
          <button
            onClick={scrollToCatalog}
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-10 py-4 text-base font-normal transition-all duration-200 border border-white/20"
          >
            Počnite odmah
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
