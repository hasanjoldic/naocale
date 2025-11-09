import { ShoppingCart, Menu } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '../lib/utils';

interface HeaderProps {
  cartCount: number;
}

export default function Header({ cartCount }: HeaderProps) {
  const navLinks = [
    { label: 'Katalog', href: '#katalog' },
    { label: 'Kako funkcioniše', href: '#kako-funkcionise' },
    { label: 'Moje narudžbe', href: '#narudzbe' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Naočale.ba
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <button className="relative p-2 rounded hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-sm h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu - Radix UI DropdownMenu */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  className="md:hidden p-2 rounded hover:bg-gray-100 transition-colors outline-none"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </button>
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className={cn(
                    "min-w-[220px] bg-white rounded p-2 shadow-lg",
                    "border border-gray-200",
                    "animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-2"
                  )}
                  sideOffset={5}
                >
                  {navLinks.map((link) => (
                    <DropdownMenu.Item key={link.label} asChild>
                      <a
                        href={link.href}
                        className={cn(
                          "block px-3 py-2 text-gray-700 rounded-sm",
                          "hover:bg-blue-50 hover:text-blue-600",
                          "transition-colors font-medium outline-none cursor-pointer"
                        )}
                      >
                        {link.label}
                      </a>
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
