import { Truck, RotateCcw, Award, ShieldCheck } from 'lucide-react';

// OPTION 1: Icon Grid with Stats
// Visual style: Large icons with supporting stats/numbers
export default function TrustSection_Option1() {
  const benefits = [
    {
      icon: Truck,
      title: 'Besplatna dostava',
      description: 'Dostavljamo vam naočale besplatno širom Bosne i Hercegovine',
      stat: '2-3 dana',
    },
    {
      icon: RotateCcw,
      title: '30 dana povrata',
      description: 'Niste zadovoljni? Vratite naočale u roku od 30 dana bez pitanja',
      stat: '100% garancija',
    },
    {
      icon: Award,
      title: 'Certificirani optičari',
      description: 'Sve naočale izrađene su pod nadzorom licenciranih optičara',
      stat: '15+ godina',
    },
    {
      icon: ShieldCheck,
      title: 'Garancija kvaliteta',
      description: '2 godine garancije na sve rame i sočiva visokog kvaliteta',
      stat: '2 godine',
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Zašto odabrati nas?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            Vaši savršeni partneri za kvalitetne naočale
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="relative group"
              >
                <div className="bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 hover:border-teal-200/30 transition-all duration-300 p-8 text-center h-full">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-800/40 border border-teal-200/20 mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-3xl font-serif text-teal-300 mb-2">
                      {benefit.stat}
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-normal text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
