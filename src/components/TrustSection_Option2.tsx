import { Truck, RotateCcw, Award, ShieldCheck } from 'lucide-react';

// OPTION 2: Horizontal Cards with Side Icons
// Visual style: Wide cards with icons on the left, content on right
export default function TrustSection_Option2() {
  const benefits = [
    {
      icon: Truck,
      title: 'Besplatna dostava',
      description: 'Dostavljamo vam naočale besplatno širom Bosne i Hercegovine. Pratite status narudžbe online i primite naočale za 2-3 radna dana.',
    },
    {
      icon: RotateCcw,
      title: '30 dana povrata',
      description: 'Niste zadovoljni? Vratite naočale u roku od 30 dana bez pitanja. Jednostavan proces povrata sa besplatnom povratnom dostavom.',
    },
    {
      icon: Award,
      title: 'Certificirani optičari',
      description: 'Sve naočale izrađene su pod nadzorom licenciranih optičara sa 15+ godina iskustva u optičkoj industriji.',
    },
    {
      icon: ShieldCheck,
      title: 'Garancija kvaliteta',
      description: '2 godine garancije na sve rame i sočiva visokog kvaliteta. Besplatna zamjena u slučaju grešaka u izradi.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Zašto odabrati nas?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            Vaši savršeni partneri za kvalitetne naočale
          </p>
        </div>

        <div className="space-y-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 hover:border-teal-200/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6 p-6 sm:p-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-teal-800/40 border border-teal-200/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-serif font-normal text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
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
