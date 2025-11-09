import ProcessSteps_Option1 from '../components/ProcessSteps_Option1';
import ProcessSteps_Option2 from '../components/ProcessSteps_Option2';
import ProcessSteps_Option3 from '../components/ProcessSteps_Option3';
import ProcessSteps_Option4 from '../components/ProcessSteps_Option4';
import ProcessSteps_Option5 from '../components/ProcessSteps_Option5';

export default function ProcessStepsDemo() {
  const options = [
    {
      id: 1,
      name: 'Horizontalni Timeline',
      description: 'Horizontalna progresija sa povezujućim linijama i velikim ikonama u krugovima',
      component: ProcessSteps_Option1,
    },
    {
      id: 2,
      name: 'Zigzag Alternativni Layout',
      description: 'Koraci se izmjenjuju lijevo-desno sa centralnom linijom (kao Instagram timeline)',
      component: ProcessSteps_Option2,
    },
    {
      id: 3,
      name: 'Veliki Brojevi',
      description: 'Kartice sa ogromnim brojevima u pozadini kao dizajn element',
      component: ProcessSteps_Option3,
    },
    {
      id: 4,
      name: 'Minimalista Lista',
      description: 'Čista, jednostavna lista sa strelicama i povezujućim linijama',
      component: ProcessSteps_Option4,
    },
    {
      id: 5,
      name: 'Kompaktne Kartice',
      description: 'Male horizontalne kartice fokusirane na ikone, sve u jednom redu',
      component: ProcessSteps_Option5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
      {/* Header */}
      <div className="bg-teal-950/80 backdrop-blur-sm border-b border-teal-200/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-serif text-white text-center">
            Kako funkcioniše? - 5 Dizajnerskih Opcija
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
