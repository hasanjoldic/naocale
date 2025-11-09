import { Package, Truck, Home, CheckCircle, Upload } from 'lucide-react';

// OPTION 3: Large Number Emphasis Cards
// Visual style: Oversized step numbers as design element
export default function ProcessSteps_Option3() {
  const steps = [
    {
      number: 1,
      title: 'Odaberite 3 rama',
      description: 'Pretražite naš katalog i odaberite do 3 rama koja želite isprobati kod kuće.',
      icon: Package,
    },
    {
      number: 2,
      title: 'Besplatna dostava',
      description: 'Šaljemo vam odabrane rame besplatno na kućnu adresu širom Bosne i Hercegovine.',
      icon: Truck,
    },
    {
      number: 3,
      title: 'Isprobajte kod kuće',
      description: 'Uzmite vrijeme da isprobate naočale u ugodnosti svog doma. Imate 5 dana.',
      icon: Home,
    },
    {
      number: 4,
      title: 'Odlučite se',
      description: 'Zadržite rama koja vam se najviše sviđaju. Ostale vratite u priloženom paketu.',
      icon: CheckCircle,
    },
    {
      number: 5,
      title: 'Pošaljite recept',
      description: 'Upload-ujte svoju dioptriju i mi ćemo izraditi vaše naočale prema receptu.',
      icon: Upload,
    },
  ];

  return (
    <section id="kako-funkcionise" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Kako funkcioniše?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            U samo 5 jednostavnih koraka do vaših savršenih naočala
          </p>
        </div>

        {/* Large Number Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 p-8 hover:border-teal-200/30 transition-all group overflow-hidden"
              >
                {/* Giant Background Number */}
                <div className="absolute -top-8 -right-4 text-[160px] font-serif font-bold text-white/5 leading-none select-none">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Small Number */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-teal-700/50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-5xl font-serif font-normal text-teal-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-normal text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.description}
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
