import { Package, Truck, Home, CheckCircle, Upload, ChevronDown } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { cn } from '../lib/utils';

export default function ProcessSteps() {
  const steps = [
    {
      number: 1,
      title: 'Odaberite 3 rama',
      description: 'Pretražite naš katalog i odaberite do 3 rama koja želite isprobati kod kuće.',
      icon: Package,
      image: null,
      details: 'Brzo i lako pronađite savršene rame za vaš stil. Koristite filtere po obliku, boji i cijeni.',
    },
    {
      number: 2,
      title: 'Besplatna dostava',
      description: 'Šaljemo vam odabrane rame besplatno na kućnu adresu širom Bosne i Hercegovine.',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=300&auto=format&fit=crop',
      details: 'Dostava traje 2-3 radna dana. Pratite status narudžbe online.',
    },
    {
      number: 3,
      title: 'Isprobajte kod kuće',
      description: 'Uzmite vrijeme da isprobate naočale u ugodnosti svog doma. Imate 5 dana.',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=300&auto=format&fit=crop',
      details: 'Probajte ih sa različitim odjećama, zatražite mišljenje porodice i prijatelja.',
    },
    {
      number: 4,
      title: 'Odlučite se',
      description: 'Zadržite rama koja vam se najviše sviđaju. Ostale vratite u priloženom paketu.',
      icon: CheckCircle,
      image: null,
      details: 'Jednostavan povrat - koristite priloženu etiketu za besplatnu povratnu dostavu.',
    },
    {
      number: 5,
      title: 'Pošaljite recept',
      description: 'Upload-ujte svoju dioptriju i mi ćemo izraditi vaše naočale prema receptu.',
      icon: Upload,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=300&auto=format&fit=crop',
      details: 'Primite gotove naočale sa vašom dioptrijom za 7-10 dana.',
    },
  ];

  return (
    <section id="kako-funkcionise" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-normal text-white mb-4">
            Kako funkcioniše?
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            U samo 5 jednostavnih koraka do vaših savršenih naočala
          </p>
        </div>

        {/* Desktop/Tablet Grid View */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-teal-950/70 rounded-lg p-6 border border-teal-800/50 hover:border-teal-700/80 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-4">
                  <Icon className="w-10 h-10 text-teal-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-medium text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  {step.description}
                </p>

                {/* Optional Image */}
                {step.image && (
                  <div className="mt-4 rounded overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion View */}
        <Accordion.Root type="single" collapsible className="sm:hidden space-y-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Accordion.Item
                key={step.number}
                value={`step-${step.number}`}
                className="bg-teal-950/70 rounded-lg border border-teal-800/50 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className={cn(
                      "flex items-center justify-between w-full p-4 text-left",
                      "hover:bg-teal-900/30 transition-colors",
                      "group"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-7 h-7 text-teal-300 flex-shrink-0" />
                      <h3 className="font-medium text-white text-sm">
                        {step.title}
                      </h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-white/60 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className={cn(
                    "overflow-hidden",
                    "data-[state=open]:animate-accordion-down",
                    "data-[state=closed]:animate-accordion-up"
                  )}
                >
                  <div className="p-4 pt-0 space-y-3">
                    <p className="text-sm text-white/70">
                      {step.description}
                    </p>
                    {step.details && (
                      <p className="text-xs text-white/60">
                        {step.details}
                      </p>
                    )}
                    {step.image && (
                      <div className="rounded overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    )}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </div>
    </section>
  );
}
