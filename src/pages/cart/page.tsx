import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trash2, CheckCircle } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { frames } from '../../data/frames';

export default function CartPage() {
  const navigate = useNavigate();
  const [selectedFrameIds, setSelectedFrameIds] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const saved = localStorage.getItem('selectedFrames');
    if (saved) {
      setSelectedFrameIds(JSON.parse(saved));
    }
  }, []);

  const selectedFrames = frames.filter((frame) =>
    selectedFrameIds.includes(frame.id)
  );

  const removeFrame = (frameId: number) => {
    const newSelection = selectedFrameIds.filter((id) => id !== frameId);
    setSelectedFrameIds(newSelection);
    localStorage.setItem('selectedFrames', JSON.stringify(newSelection));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Ime i prezime je obavezno';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email adresa je obavezna';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Unesite validnu email adresu';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Broj telefona je obavezan';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Adresa je obavezna';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedFrames.length === 0) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    console.log('Order submitted:', {
      frames: selectedFrames,
      customer: formData,
    });

    setSubmitted(true);
    localStorage.removeItem('selectedFrames');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
        <Header cartCount={0} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 p-12">
            <CheckCircle className="w-20 h-20 text-teal-300 mx-auto mb-6" />
            <h1 className="text-4xl font-serif font-normal text-white mb-4">
              Narudžba uspješno poslana!
            </h1>
            <p className="text-white/85 text-lg mb-8">
              Hvala vam! Primili smo vašu narudžbu i kontaktiraćemo vas uskoro.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-teal-900 transition-all"
            >
              Povratak na početnu
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (selectedFrames.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
        <Header cartCount={0} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 p-12">
            <h1 className="text-4xl font-serif font-normal text-white mb-4">
              Vaša korpa je prazna
            </h1>
            <p className="text-white/85 text-lg mb-8">
              Odaberite do 3 rama koja želite isprobati kod kuće.
            </p>
            <Link
              to="/katalog"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 hover:bg-white hover:text-teal-900 transition-all"
            >
              Pogledaj katalog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600">
      <Header cartCount={selectedFrameIds.length} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Nazad
        </button>

        <h1 className="text-4xl sm:text-5xl font-serif font-normal text-white mb-8">
          Vaša narudžba
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Selected Frames */}
          <div>
            <h2 className="text-2xl font-serif font-normal text-white mb-6">
              Odabrani okviri ({selectedFrames.length}/3)
            </h2>

            <div className="space-y-4">
              {selectedFrames.map((frame) => (
                <div
                  key={frame.id}
                  className="bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 overflow-hidden flex gap-4"
                >
                  <img
                    src={frame.image}
                    alt={frame.name}
                    className="w-32 h-32 object-cover flex-shrink-0"
                  />
                  <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-serif text-white mb-1">
                        {frame.name}
                      </h3>
                      <p className="text-sm text-white/70">
                        {frame.shape} • {frame.color}
                      </p>
                    </div>
                    <p className="text-xl font-serif text-teal-300">
                      {frame.price} KM
                    </p>
                  </div>
                  <div className="p-4">
                    <button
                      onClick={() => removeFrame(frame.id)}
                      className="p-2 text-white/60 hover:text-white hover:bg-teal-800/50 transition-colors"
                      aria-label="Ukloni"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 p-6">
              <div className="text-white/85 text-sm mb-4">
                <p>✓ Besplatna dostava</p>
                <p>✓ 7 dana za isprobavanje</p>
                <p>✓ Besplatan povrat</p>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div>
            <h2 className="text-2xl font-serif font-normal text-white mb-6">
              Informacije za dostavu
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-teal-900/60 backdrop-blur-sm border border-teal-200/20 p-6 space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Ime i prezime *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-teal-950/50 border border-teal-200/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 transition-colors"
                    placeholder="Vaše ime i prezime"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-300">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Email adresa *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-teal-950/50 border border-teal-200/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 transition-colors"
                    placeholder="vas@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-300">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Broj telefona *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-teal-950/50 border border-teal-200/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 transition-colors"
                    placeholder="+387 61 234 567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-300">{errors.phone}</p>
                  )}
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-white text-sm font-medium mb-2"
                  >
                    Adresa *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-teal-950/50 border border-teal-200/20 text-white placeholder-white/40 focus:outline-none focus:border-teal-400 transition-colors resize-none"
                    placeholder="Ulica i broj&#10;Grad, Poštanski broj"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-300">
                      {errors.address}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-500 text-white py-4 text-lg font-medium transition-all border border-white/20"
              >
                Potvrdi narudžbu
              </button>

              <p className="text-white/60 text-xs text-center">
                Klikom na "Potvrdi narudžbu" prihvatate naše uslove korištenja
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
