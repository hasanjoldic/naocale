export default function HeroDemo() {
  const heroOptions = [
    {
      id: 1,
      name: 'Stilska Portretna',
      description: 'Profesionalni portret osobe sa modernim naočalama - fokus na ljude i stil',
      image: '/images/hero-option-1.jpg',
    },
    {
      id: 2,
      name: 'Kolekcija Okvira',
      description: 'Minimalistički prikaz kolekcije naočala - fokus na proizvod',
      image: '/images/hero-option-2.jpg',
    },
    {
      id: 3,
      name: 'Lifestyle Try-On',
      description: 'Žena probava naočale kod kuće - naglašava "try-at-home" koncept',
      image: '/images/hero-option-3.jpg',
    },
    {
      id: 4,
      name: 'Moderna Optika',
      description: 'Moderni optički enterijer sa prikazom naočala - profesionalan pristup',
      image: '/images/hero-option-4.jpg',
    },
    {
      id: 5,
      name: 'Elegantni Close-Up',
      description: 'Close-up modernih naočala na minimalnoj pozadini - čist i elegantan',
      image: '/images/hero-option-5.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
      {/* Header */}
      <div className="bg-teal-950/80 backdrop-blur-sm border-b border-teal-200/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-serif text-white text-center">
            Hero Slike - 5 Opcija
          </h1>
          <p className="text-center text-white/70 mt-2">
            Skrolujte dolje da vidite kako svaka slika izgleda u hero sekciji
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-16 py-8">
        {heroOptions.map((option) => (
          <div key={option.id} className="relative">
            {/* Option Label */}
            <div className="max-w-7xl mx-auto px-4 mb-4">
              <div className="bg-white/10 backdrop-blur-sm border border-teal-200/30 p-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-serif text-white">
                    Opcija {option.id}
                  </span>
                  <span className="text-xl text-white/90">
                    {option.name}
                  </span>
                </div>
                <p className="text-white/70 mt-2 text-sm">
                  {option.description}
                </p>
              </div>
            </div>

            {/* Hero Section with Image */}
            <div className="relative">
              <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={option.image}
                    alt={option.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-800/85 to-teal-700/80"></div>
                  <div className="absolute inset-0 grain"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white mb-6 leading-tight">
                    Probajte 3 rama besplatno kod kuće
                  </h1>
                  <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                    Odaberite omiljene rame, primite ih kući, isprobajte i odlučite.
                    Jednostavno, povoljno i bez obaveza.
                  </p>
                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-medium hover:bg-white hover:text-teal-900 transition-all duration-300 text-lg">
                    Počnite odmah
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </section>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="bg-teal-950/60 backdrop-blur-sm border border-teal-200/20 p-8">
          <p className="text-white/80 text-lg">
            Izaberite sliku koja najbolje predstavlja vaš brand i javite mi broj opcije (1-5)
          </p>
        </div>
      </div>
    </div>
  );
}
