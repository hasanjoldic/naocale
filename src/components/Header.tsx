import { Link } from 'react-router-dom';
import { ShoppingCart, Menu } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '../lib/utils';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const navLinks = [
    { label: 'Katalog', href: '/katalog', isRoute: true },
    { label: 'Kako funkcioniše', href: '#kako-funkcionise', isRoute: false },
    { label: 'Moje narudžbe', href: '/korpa', isRoute: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-teal-900/98 backdrop-blur-sm border-b border-teal-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif font-normal text-white tracking-wide">
              Naočale.ba
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/90 hover:text-white transition-colors text-sm font-normal"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors text-sm font-normal"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link to="/korpa" className="relative p-2 rounded hover:bg-teal-900/50 transition-colors">
              <ShoppingCart className="w-5 h-5 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-teal-400 text-teal-950 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu - Radix UI DropdownMenu */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  className="md:hidden p-2 rounded hover:bg-teal-900/50 transition-colors outline-none"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-6 h-6 text-white" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className={cn(
                    "min-w-[220px] bg-teal-900/95 backdrop-blur-sm shadow-lg",
                    "border border-teal-200/20",
                    "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                  )}
                  sideOffset={5}
                >
                  {navLinks.map((link) => (
                    <DropdownMenu.Item key={link.label} asChild>
                      {link.isRoute ? (
                        <Link
                          to={link.href}
                          className={cn(
                            "block px-3 py-2 text-white/90 hover:text-white",
                            "hover:bg-teal-800/50",
                            "transition-colors outline-none cursor-pointer text-sm"
                          )}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className={cn(
                            "block px-3 py-2 text-white/90 hover:text-white",
                            "hover:bg-teal-800/50",
                            "transition-colors outline-none cursor-pointer text-sm"
                          )}
                        >
                          {link.label}
                        </a>
                      )}
                    </DropdownMenu.Item>
                  ))}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </header>
  );
}
