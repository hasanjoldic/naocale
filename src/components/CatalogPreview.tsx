import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { frames } from '../data/frames';

export default function CatalogPreview() {
  const featuredFrames = frames.slice(0, 6);

  return (
    <section id="katalog" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Naš katalog
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            Pogledajte našu kolekciju okvira i odaberite 3 koja želite isprobati
          </p>
        </div>

        {/* Featured Frames Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {featuredFrames.map((frame) => (
            <Link
              key={frame.id}
              to={`/proizvod/${frame.id}`}
              className="bg-teal-900/60 backdrop-blur-sm overflow-hidden border border-teal-200/20 hover:border-teal-200/30 transition-all group"
            >
              {/* Image */}
              <div className="relative bg-teal-950 overflow-hidden">
                <img
                  src={frame.image}
                  alt={frame.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/30 via-transparent to-transparent opacity-60"></div>
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
                <p className="text-xl font-semibold text-white">
                  {frame.price} KM
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            to="/katalog"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-10 py-4 text-base font-normal hover:bg-white hover:text-teal-900 transition-all duration-300"
          >
            Pogledaj sve proizvode
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
