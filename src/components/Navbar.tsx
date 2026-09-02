import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
  onContactClick: () => void;
}

export default function Navbar({ onOpenCV, onContactClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "À propos", href: "#apropos" },
    { name: "Compétences", href: "#competences" },
    { name: "Formations", href: "#formations" },
    { name: "Projets", href: "#projets" },
    { name: "Objectif", href: "#objectif" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group bg-white p-2 sm:px-4 sm:py-2 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg italic group-hover:bg-indigo-700 transition-colors shadow-sm">
            FC
          </div>
          <div>
            <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight block leading-none">
              Franck Chadel
            </span>
            <span className="text-xs text-slate-500 font-medium tracking-wide mt-0.5 block">
              Développeur Mobile & Designer UX/UI
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-2xl shadow-sm border border-slate-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenCV}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:border-slate-900 hover:bg-slate-50 transition-all bg-white shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            Télécharger CV
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-sm"
          >
            Me contacter
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 bg-white rounded-xl border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none shadow-sm"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-indigo-600 py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl border border-slate-200 text-slate-800 bg-white shadow-sm"
            >
              <Download className="w-4 h-4" />
              Télécharger mon CV
            </button>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full inline-flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl bg-indigo-600 text-white shadow-sm"
            >
              Me contacter
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
