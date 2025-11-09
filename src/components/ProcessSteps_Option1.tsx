import { Package, Truck, Home, CheckCircle, Upload } from 'lucide-react';

// OPTION 1: Horizontal Timeline (Desktop) / Vertical Steps (Mobile)
// Visual flow: Left to right progression with connecting lines
export default function ProcessSteps_Option1() {
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

        {/* Horizontal Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-teal-200/20"></div>
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="relative">
                    {/* Circle with Number */}
                    <div className="flex justify-center mb-6">
                      <div className="w-24 h-24 rounded-full bg-teal-900/60 backdrop-blur-sm border-2 border-teal-200/20 flex items-center justify-center relative z-10">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="bg-teal-900/40 backdrop-blur-sm border border-teal-200/20 p-5 text-center min-h-[180px]">
                      <div className="text-teal-300 text-sm font-semibold mb-2">
                        Korak {step.number}
                      </div>
                      <h3 className="text-lg font-serif font-normal text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/75 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vertical Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="flex gap-4">
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-teal-900/60 backdrop-blur-sm border-2 border-teal-200/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-teal-900/40 backdrop-blur-sm border border-teal-200/20 p-5">
                  <div className="text-teal-300 text-xs font-semibold mb-1">
                    Korak {step.number}
                  </div>
                  <h3 className="text-lg font-serif font-normal text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
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
