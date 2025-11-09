import { Package, Truck, Home, CheckCircle, Upload } from 'lucide-react';

export default function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: 'Odaberite 3 rama',
      description: 'Pretražite naš katalog i odaberite do 3 rama koja želite isprobati kod kuće.',
      icon: Package,
      image: '/images/eyeglasses_frames_di_9b7334d3.jpg',
    },
    {
      number: 2,
      title: 'Besplatna dostava',
      description: 'Šaljemo vam odabrane rame besplatno na kućnu adresu širom Bosne i Hercegovine.',
      icon: Truck,
      image: '/images/delivery_courier_pac_e51c5216.jpg',
    },
    {
      number: 3,
      title: 'Isprobajte kod kuće',
      description: 'Uzmite vrijeme da isprobate naočale u ugodnosti svog doma. Imate 5 dana.',
      icon: Home,
      image: '/images/woman_trying_on_eyeg_3789439b.jpg',
    },
    {
      number: 4,
      title: 'Odlučite se',
      description: 'Zadržite rama koja vam se najviše sviđaju. Ostale vratite u priloženom paketu.',
      icon: CheckCircle,
      image: '/images/happy_person_wearing_da163d3c.jpg',
    },
    {
      number: 5,
      title: 'Pošaljite recept',
      description: 'Upload-ujte svoju dioptriju i mi ćemo izraditi vaše naočale prema receptu.',
      icon: Upload,
      image: '/images/prescription_documen_c8fe3ace.jpg',
    },
  ];

  return (
    <section id="kako-funkcionise" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-4">
            Kako funkcioniše?
          </h2>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto font-light">
            U samo 5 jednostavnih koraka do vaših savršenih naočala
          </p>
        </div>

        {/* Zigzag Timeline */}
        <div className="relative">
          {/* Center Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-teal-200/20 -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={step.number} className="relative">
                  <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
                    {/* Content Card - Alternates sides on desktop */}
                    <div className={`${isEven ? 'md:order-1 md:text-right md:pr-8' : 'md:order-2 md:pl-8'} mb-6 md:mb-0`}>
                      <div className="bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 p-6 hover:border-teal-200/30 transition-all">
                        <div className="flex items-center gap-3 mb-3 md:hidden">
                          <div className="w-12 h-12 rounded-full bg-teal-700/50 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-teal-300 text-sm font-semibold">Korak {step.number}</div>
                        </div>
                        
                        <div className="hidden md:block text-teal-300 text-sm font-semibold mb-2">
                          Korak {step.number}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-serif font-normal text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Image - Alternates sides on desktop */}
                    <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="relative overflow-hidden border border-teal-200/20 group">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/40 via-transparent to-transparent"></div>
                      </div>
                    </div>

                    {/* Center Circle - Desktop Only */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="w-16 h-16 rounded-full bg-teal-900/90 backdrop-blur-sm border-2 border-teal-200/30 flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
