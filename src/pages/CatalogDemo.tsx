import FrameCatalog_Option1 from '../components/FrameCatalog_Option1';
import FrameCatalog_Option2 from '../components/FrameCatalog_Option2';
import FrameCatalog_Option3 from '../components/FrameCatalog_Option3';
import FrameCatalog_Option4 from '../components/FrameCatalog_Option4';
import FrameCatalog_Option5 from '../components/FrameCatalog_Option5';

export default function CatalogDemo() {
  const options = [
    {
      id: 1,
      name: 'Grid sa Velikim Slikama',
      description: 'Klasična grid raspodjela sa fokusom na fotografiju proizvoda - 3 kolone',
      component: FrameCatalog_Option1,
    },
    {
      id: 2,
      name: 'Horizontalni Scroll',
      description: 'Carousel dizajn sa bočnim skrolovanjem - moderne e-commerce aplikacije',
      component: FrameCatalog_Option2,
    },
    {
      id: 3,
      name: 'Masonry/Pinterest Layout',
      description: 'Stepenovani grid sa različitim visinama - kreativna raspodjela',
      component: FrameCatalog_Option3,
    },
    {
      id: 4,
      name: 'Minimalistička Lista',
      description: 'Čista lista sa bočnim slikama - fokus na informacije',
      component: FrameCatalog_Option4,
    },
    {
      id: 5,
      name: 'Large Hero Kartice',
      description: 'Velike full-width kartice sa overlay tekstom - bold pristup',
      component: FrameCatalog_Option5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
      {/* Header */}
      <div className="bg-teal-950/80 backdrop-blur-sm border-b border-teal-200/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-serif text-white text-center">
            Naš katalog - 5 Dizajnerskih Opcija
          </h1>
          <p className="text-center text-white/70 mt-2">
            Skrolujte dolje da vidite sve varijante
          </p>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-16 py-8">
        {options.map((option) => {
          const Component = option.component;
          return (
            <div key={option.id} className="relative">
              {/* Option Label */}
              <div className="max-w-7xl mx-auto px-4 mb-4">
                <div className="bg-white/10 backdrop-blur-sm border border-teal-200/30 p-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-serif text-white">
                      Opcija {option.id}
                    </span>
                    <span className="text-xl text-white/90">
                      {option.name}
                    </span>
                  </div>
                  <p className="text-white/70 mt-2 text-sm">
                    {option.description}
                  </p>
                </div>
              </div>

              {/* Component */}
              <div className="border-t border-b border-teal-200/20 bg-gradient-to-br from-teal-900/50 to-teal-800/50">
                <Component />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Note */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="bg-teal-950/60 backdrop-blur-sm border border-teal-200/20 p-8">
          <p className="text-white/80 text-lg">
            Izaberite dizajn koji vam se najviše sviđa i javite mi broj opcije (1-5)
          </p>
        </div>
      </div>
    </div>
  );
}
