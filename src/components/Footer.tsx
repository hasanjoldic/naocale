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
    <footer className="relative bg-teal-950 border-t border-teal-800/30 text-white/80 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-serif font-normal text-white mb-4">Naočale.ba</h3>
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Vaš pouzdan partner za kvalitetne naočale. Isprobajte kod kuće prije nego što kupite.
            </p>
            <p className="text-sm text-white/60 mb-6">
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
                    className="p-2 bg-teal-900/60 border border-teal-200/20 hover:bg-teal-800 hover:border-teal-200/30 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-normal text-white mb-4">Brzi linkovi</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors inline-block text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div id="kontakt">
            <h4 className="text-lg font-serif font-normal text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@naocale.ba"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  info@naocale.ba
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+38733123456"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  +387 33 123 456
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <address className="text-white/70 not-italic text-sm">
                  Ferhadija 15<br />
                  71000 Sarajevo<br />
                  Bosna i Hercegovina
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <Separator.Root className="bg-teal-800/30 h-px my-8" />

        {/* Copyright and Additional Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center sm:text-left">
            © {currentYear} Naočale.ba. Sva prava zadržana.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Uvjeti korištenja
            </a>
            <Separator.Root decorative orientation="vertical" className="bg-teal-800/30 w-px h-4" />
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privatnost
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
