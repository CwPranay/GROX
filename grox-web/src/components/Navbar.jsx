import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="bg-[var(--grox-black)]/90 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
          
          {/* Brand */}
          <div className="text-lg font-semibold tracking-wide">
            <img width="60px" className="sm:w-[80px]" src="./grox.png" alt="GROX" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-14 text-sm text-[var(--grox-gray)]">
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
            <a href="#why" className="hover:text-white transition">
              Why GROX
            </a>
            <a href="#process" className="hover:text-white transition">
              Process
            </a>
          </div>

          {/* Desktop Login */}
          <a
            href="/login"
            className="hidden md:block text-sm text-[var(--grox-gray)] hover:text-white transition"
          >
            Login
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[var(--grox-gray)] hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[var(--grox-black)] border-l border-white/10 z-50 md:hidden transform transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          
          <div className="flex justify-end px-4 py-4 border-b border-white/10">
          <img className='mr-38' width="63px" src="./grox.png" alt="" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[var(--grox-gray)] hover:text-white transition-colors duration-200"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col px-6 py-8 gap-8 text-sm">
            <a 
              href="#services" 
              className="text-[var(--grox-gray)] hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#why" 
              className="text-[var(--grox-gray)] hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why GROX
            </a>
            <a 
              href="#process" 
              className="text-[var(--grox-gray)] hover:text-white transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
          </div>

          {/* Login at Bottom */}
          <div className="mt-auto px-6 py-8 border-t border-white/10">
            <a 
              href="/login" 
              className="text-sm text-[var(--grox-gray)] hover:text-white transition-colors duration-200"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}