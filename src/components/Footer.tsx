import React from 'react';
import { CONTACT_INFO } from '../data';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg italic shadow-sm">
                FC
              </div>
              <span className="font-bold text-xl tracking-tight">Franck Chadel</span>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Étudiant en Informatique & Développement d’Applications, spécialisé en UX/UI Design et développement mobile Android (Kotlin). Basé en Côte d’Ivoire.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 transition-colors shadow-xs"
            >
              Retour en haut
              <ArrowUp className="w-4 h-4" />
            </button>
            <div className="text-xs text-slate-500">
              📍 Localisation : {CONTACT_INFO.location}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Franck Chadel. Tous droits réservés.
          </p>
          <p className="flex items-center gap-1.5">
            Conçu avec passion et rigueur en Côte d’Ivoire
          </p>
        </div>
      </div>
    </footer>
  );
}
