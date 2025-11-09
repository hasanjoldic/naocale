import TrustSection_Option1 from '../components/TrustSection_Option1';
import TrustSection_Option2 from '../components/TrustSection_Option2';
import TrustSection_Option3 from '../components/TrustSection_Option3';
import TrustSection_Option4 from '../components/TrustSection_Option4';
import TrustSection_Option5 from '../components/TrustSection_Option5';

export default function TrustSectionDemo() {
  const options = [
    {
      id: 1,
      name: 'Icon Grid sa Statistikama',
      description: 'Velike ikone sa podržavajućim brojevima/statistikama (2-3 dana, 100% garancija, itd.)',
      component: TrustSection_Option1,
    },
    {
      id: 2,
      name: 'Horizontalne Kartice',
      description: 'Široke kartice sa ikonama sa lijeve strane i sadržajem desno',
      component: TrustSection_Option2,
    },
    {
      id: 3,
      name: 'Lista sa Check Markovima',
      description: 'Dvo-kolona lista sa kružnim check markovima i malim ikonama',
      component: TrustSection_Option3,
    },
    {
      id: 4,
      name: 'Kartice sa Dekorativnim Brojevima',
      description: 'Standardne kartice sa ogromnim brojevima u pozadini kao dizajn element',
      component: TrustSection_Option4,
    },
    {
      id: 5,
      name: 'Minimalistički Badge Dizajn',
      description: 'Čiste kružne badge ikone sa centralnim tekstualnim blokm',
      component: TrustSection_Option5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
      {/* Header */}
      <div className="bg-teal-950/80 backdrop-blur-sm border-b border-teal-200/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-serif text-white text-center">
            Zašto odabrati nas? - 5 Dizajnerskih Opcija
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
