import { Truck, RotateCcw, Award, ShieldCheck } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Zašto odabrati nas?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            Vaši savršeni partneri za kvalitetne naočale
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="text-center p-6 bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 hover:border-teal-200/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-normal text-white mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
