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
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Zašto odabrati nas?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="text-center p-6 rounded-md bg-gray-50 border border-gray-200 hover:shadow-lg hover:border-blue-600 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-sm mb-4 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">
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
