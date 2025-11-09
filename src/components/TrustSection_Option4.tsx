import { Truck, RotateCcw, Award, ShieldCheck } from 'lucide-react';

// OPTION 4: Overlapping Cards with Background Images
// Visual style: Cards with subtle background patterns
export default function TrustSection_Option4() {
  const benefits = [
    {
      icon: Truck,
      title: 'Besplatna dostava',
      description: 'Dostavljamo vam naočale besplatno širom Bosne i Hercegovine',
    },
    {
      icon: RotateCcw,
      title: '30 dana povrata',
      description: 'Niste zadovoljni? Vratite naočale u roku od 30 dana bez pitanja',
    },
    {
      icon: Award,
      title: 'Certificirani optičari',
      description: 'Sve naočale izrađene su pod nadzorom licenciranih optičara',
    },
    {
      icon: ShieldCheck,
      title: 'Garancija kvaliteta',
      description: '2 godine garancije na sve rame i sočiva visokog kvaliteta',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="relative group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative bg-teal-900/70 backdrop-blur-sm border border-teal-200/20 p-6 hover:border-teal-200/40 transition-all duration-300 h-full">
                  {/* Decorative background number */}
                  <div className="absolute -top-4 -right-4 text-[120px] font-serif font-bold text-white/5 leading-none select-none">
                    {index + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-teal-700/30 border border-teal-200/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h3 className="text-lg font-serif font-normal text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
