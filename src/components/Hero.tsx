import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('katalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[65vh] min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Teal Gradient Overlay - matching Enki */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800/90 via-teal-700/85 to-teal-600/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white mb-4 leading-tight">
            Probajte 3 rama besplatno kod kuće
          </h1>
          <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Odaberite omiljene rame, primite ih kući, isprobajte i odlučite. Jednostavno, povoljno i bez obaveza.
          </p>
          <button
            onClick={scrollToCatalog}
            className="group inline-flex items-center gap-2 bg-teal-950/80 hover:bg-teal-950 text-white px-8 py-3 rounded transition-all duration-200 border border-white/20"
          >
            Počnite odmah
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
