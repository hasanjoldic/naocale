import { Truck, RotateCcw, Award, ShieldCheck, Check } from 'lucide-react';

export default function TrustSection() {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Zašto odabrati nas?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            Vaši savršeni partneri za kvalitetne naočale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-teal-800/40 border border-teal-200/20 flex items-center justify-center group-hover:bg-teal-700/50 transition-colors">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-teal-300 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-serif font-normal text-white">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed">
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
