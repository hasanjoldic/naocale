import { Truck, RotateCcw, Award, ShieldCheck } from 'lucide-react';

// OPTION 5: Minimal Icon Badges
// Visual style: Clean, simple icon badges with minimal text
export default function TrustSection_Option5() {
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

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center max-w-[200px] group cursor-pointer"
              >
                <div className="w-24 h-24 rounded-full bg-teal-900/60 border-2 border-teal-200/20 flex items-center justify-center mb-4 group-hover:border-teal-200/40 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-base font-serif font-normal text-white mb-1">
                  {benefit.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="bg-teal-900/40 backdrop-blur-sm border border-teal-200/20 p-8 text-center">
          <p className="text-white/85 text-lg leading-relaxed max-w-3xl mx-auto">
            Specijalizirani smo za pružanje vrhunske optičke usluge sa fokusom na kvalitet, pristupačnost i zadovoljstvo kupaca. Naš tim stručnjaka je posvećen tome da vam pomogne pronaći savršene naočale.
          </p>
        </div>
      </div>
    </section>
  );
}
