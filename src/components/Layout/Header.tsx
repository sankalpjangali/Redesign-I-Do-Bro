import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Solutions',
      submenu: [
        { name: 'Entrepreneurship', href: '/entrepreneurship' },
        { name: 'Citizenship', href: '/citizenship' },
        { name: 'Partnership', href: '/partnership' },
      ],
    },
    {
      name: 'Resources',
      href: '/resources',
    },
    { name: 'Contact', href: '/contact' },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            {/* 🖼️ Logo Image */}
            <img
              src="/logo.png" // ← change this path to your actual logo file
              alt="Idobro Logo"
              className="h-10 w-10 object-contain"
            />
            <div>
              <div className="text-2xl font-bold text-blue-600">idobro</div>
              <div className="text-sm text-gray-600 -mt-1">Multiply your Impact</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            {navigation.map((item) =>
              item.submenu ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md py-2">
                      {item.submenu.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex justify-between items-center text-gray-700 font-medium py-2 hover:text-blue-600"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-2 h-4 w-4 transform transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.href}
                            className="block text-gray-600 py-1 hover:text-blue-600"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium py-2"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
