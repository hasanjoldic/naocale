import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import * as Separator from '@radix-ui/react-separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'O nama', href: '#' },
    { label: 'Katalog', href: '#katalog' },
    { label: 'Kako funkcioniše', href: '#kako-funkcionise' },
    { label: 'Politika privatnosti', href: '#' },
    { label: 'Uslovi korištenja', href: '#' },
    { label: 'Kontakt', href: '#kontakt' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Naočale.ba</h3>
            <p className="text-gray-400 mb-4">
              Vaš pouzdan partner za kvalitetne naočale. Isprobajte kod kuće prije nego što kupite.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Certificirani optičar sa višegodišnjim iskustvom u Bosni i Hercegovini.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-gray-800 hover:bg-blue-600 rounded transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="kontakt">
            <h4 className="text-lg font-semibold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@naocale.ba"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  info@naocale.ba
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+38733123456"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  +387 33 123 456
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <address className="text-gray-400 not-italic">
                  Ferhadija 15<br />
                  71000 Sarajevo<br />
                  Bosna i Hercegovina
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <Separator.Root className="bg-gray-800 h-px my-8" />

        {/* Copyright and Additional Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Naočale.ba. Sva prava zadržana.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              Uvjeti korištenja
            </a>
            <Separator.Root decorative orientation="vertical" className="bg-gray-700 w-px h-4" />
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              Privatnost
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
