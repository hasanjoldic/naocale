import { Package, Truck, Home, CheckCircle, Upload } from 'lucide-react';

// OPTION 5: Compact Horizontal Cards with Icons on Top
// Visual style: Smaller, icon-focused cards in a single row
export default function ProcessSteps_Option5() {
  const steps = [
    {
      number: 1,
      title: 'Odaberite 3 rama',
      description: 'Pretražite katalog i odaberite rame',
      icon: Package,
    },
    {
      number: 2,
      title: 'Besplatna dostava',
      description: 'Dostava širom BiH u 2-3 dana',
      icon: Truck,
    },
    {
      number: 3,
      title: 'Isprobajte kod kuće',
      description: 'Imate 5 dana za isprobavanje',
      icon: Home,
    },
    {
      number: 4,
      title: 'Odlučite se',
      description: 'Zadržite ili vratite naočale',
      icon: CheckCircle,
    },
    {
      number: 5,
      title: 'Pošaljite recept',
      description: 'Upload-ujte dioptriju online',
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

        {/* Compact Horizontal Cards */}
        <div className="relative">
          {/* Desktop Flow Arrows */}
          <div className="hidden lg:flex items-center justify-between mb-2 px-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-1 flex justify-center">
                <svg className="w-16 h-6 text-teal-200/30" fill="none" viewBox="0 0 64 24">
                  <path d="M0 12 L56 12 M48 6 L56 12 L48 18" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-teal-900/50 backdrop-blur-sm border border-teal-200/20 hover:border-teal-200/40 transition-all p-6 text-center group"
                >
                  {/* Large Icon Circle */}
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-teal-800/40 border border-teal-200/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="text-xs text-teal-300 font-semibold tracking-wider mb-2">
                    KORAK {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-serif font-normal text-white mb-2 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
