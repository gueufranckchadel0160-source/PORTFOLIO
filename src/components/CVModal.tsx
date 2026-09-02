import React from 'react';
import { CONTACT_INFO, FORMATIONS_DATA, SKILLS_DATA } from '../data';
import { X, Download, Mail, Phone, MapPin, Linkedin, Github, GraduationCap, Award, Briefcase } from 'lucide-react';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-neutral-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">CV & Profil Professionnel</h3>
            <p className="text-xs text-neutral-500">Franck Chadel — Étudiant en Informatique & Développeur</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              Imprimer / Enregistrer PDF
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="p-8 sm:p-12 space-y-8 bg-white text-neutral-800">
          
          {/* Header CV */}
          <div className="border-b border-neutral-200 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
                Franck Chadel
              </h1>
              <p className="text-base text-indigo-600 font-semibold mt-1">
                Étudiant en Informatique & Développement d’Applications
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Spécialisé en UX/UI Design & Développement Mobile Android (Kotlin)
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-600" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-indigo-600" />
                <span>linkedin.com/in/franck-chadel</span>
              </div>
            </div>
          </div>

          {/* Profil Résumé */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Profil Professionnel
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Franck Chadel est un étudiant en Informatique et Développement d’Applications, passionné par la conception d’interfaces modernes, l’expérience utilisateur (UX/UI) et le développement d’applications mobiles Android. Formé en UX/UI Design et en développement Android Kotlin chez DigiFemmes Côte d’Ivoire, son objectif est de concevoir des solutions numériques utiles, intuitives et adaptées aux besoins des utilisateurs.
            </p>
          </div>

          {/* Compétences */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Compétences Techniques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60">
                <h3 className="font-bold text-sm text-neutral-900 mb-2">UX/UI Design</h3>
                <ul className="text-xs text-neutral-600 space-y-1">
                  {SKILLS_DATA.uxui.map((s, i) => <li key={i}>• {s}</li>)}
                </ul>
              </div>

              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60">
                <h3 className="font-bold text-sm text-neutral-900 mb-2">Développement Mobile</h3>
                <ul className="text-xs text-neutral-600 space-y-1">
                  {SKILLS_DATA.mobile.map((s, i) => <li key={i}>• {s}</li>)}
                </ul>
              </div>

              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60">
                <h3 className="font-bold text-sm text-neutral-900 mb-2">Web & Informatique</h3>
                <ul className="text-xs text-neutral-600 space-y-1">
                  {SKILLS_DATA.webIt.map((s, i) => <li key={i}>• {s}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Formations */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
              Formations & Cursus
            </h2>
            <div className="space-y-4">
              {FORMATIONS_DATA.map((f, i) => (
                <div key={i} className="border-l-2 border-indigo-600 pl-4 py-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-neutral-900 text-sm">{f.title}</h3>
                    <span className="text-xs font-semibold text-indigo-600">{f.org}</span>
                  </div>
                  <p className="text-xs text-neutral-600">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Modal */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex justify-between items-center">
          <span className="text-xs text-neutral-500">Franck Chadel — Côte d'Ivoire</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-neutral-900 text-white font-semibold text-sm hover:bg-indigo-600 transition-colors"
          >
            Fermer le CV
          </button>
        </div>
      </div>
    </div>
  );
}
