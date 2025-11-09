import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('katalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Probajte 3 rama besplatno kod kuće
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            Odaberite omiljene rame, primite ih kući, isprobajte i odlučite. Jednostavno, povoljno i bez obaveza.
          </p>
          <button
            onClick={scrollToCatalog}
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Počnite odmah
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
