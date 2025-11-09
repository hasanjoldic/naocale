import { Package, Truck, Home, CheckCircle, Upload, ArrowRight } from 'lucide-react';

// OPTION 4: Minimalist List with Right Arrows
// Visual style: Clean, simple list format with arrow separators
export default function ProcessSteps_Option4() {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Kako funkcioniše?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            U samo 5 jednostavnih koraka do vaših savršenih naočala
          </p>
        </div>

        {/* Minimalist List */}
        <div className="space-y-1">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number}>
                <div className="bg-teal-900/40 backdrop-blur-sm border border-teal-200/20 hover:bg-teal-900/60 hover:border-teal-200/30 transition-all group">
                  <div className="p-6 sm:p-8 flex items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-14 h-14 bg-teal-700/30 border border-teal-200/20 flex items-center justify-center group-hover:bg-teal-700/50 transition-colors">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-sm text-teal-300 font-semibold">
                          0{step.number}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-normal text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-white/75 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="hidden sm:block flex-shrink-0 self-center">
                      <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white/50 transition-colors" />
                    </div>
                  </div>
                </div>

                {/* Connector Line - not on last item */}
                {!isLast && (
                  <div className="h-8 flex justify-center">
                    <div className="w-0.5 h-full bg-teal-200/10"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
