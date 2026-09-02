import React from 'react';
import { CONTACT_INFO, FORMATIONS_DATA, EXPERIENCES_DATA, LOGICIELS_DATA } from '../data';
import { X, Download, Mail, Phone, MapPin, Linkedin, GraduationCap, Briefcase, Sparkles } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">CV Officiel — Gueu Franck Chadel</h3>
            <p className="text-xs text-slate-500">Infographe & UI/UX Designer</p>
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
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Body */}
        <div className="p-8 sm:p-12 space-y-8 bg-white text-slate-800">
          
          {/* Header CV */}
          <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                {CONTACT_INFO.name}
              </h1>
              <p className="text-base text-indigo-600 font-semibold mt-1">
                {CONTACT_INFO.title}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Communication visuelle, design d'interfaces et développement numérique
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{CONTACT_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{CONTACT_INFO.emails[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{CONTACT_INFO.emails[1]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{CONTACT_INFO.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>{CONTACT_INFO.phones[1]}</span>
              </div>
            </div>
          </div>

          {/* Profil Résumé */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Profil
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-slate-50/60 p-5 rounded-2xl border border-slate-200/60">
              Infographe créatif et rigoureux, passionné par la communication visuelle et le design d’interfaces. Formé en UI/UX Design, je conçois des supports graphiques ainsi que des interfaces web et mobiles. Maîtrisant les principaux outils de création graphique et de prototypage, je mets ma créativité au service des projets de l’entreprise et l’expérience de leurs utilisateurs.
            </p>
          </div>

          {/* Compétences & Logiciels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Compétences
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Infographie", "Notion des Outils IA", "UI/UX Design", "Communication visuelle", "Supports publicitaires"].map((comp, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white text-slate-800 text-xs font-semibold rounded-xl border border-slate-200 shadow-xs">
                    ✨ {comp}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/60">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Logiciels Maîtrisés
              </h2>
              <div className="grid grid-cols-2 gap-2">
                {LOGICIELS_DATA.map((log, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 shadow-xs">
                    <span className="font-bold text-slate-900 text-xs block">{log.name}</span>
                    <span className="text-[10px] text-slate-500">{log.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Expériences Professionnelles */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
              Expériences
            </h2>
            <div className="space-y-4">
              {EXPERIENCES_DATA.map((exp, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-slate-900 text-base">{exp.role}</h3>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-semibold w-fit">
                      {exp.company} ({exp.period})
                    </span>
                  </div>
                  <ul className="text-xs sm:text-sm text-slate-600 space-y-1 pt-1">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-600 font-bold">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formations & Cursus */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
              Formations
            </h2>
            <div className="space-y-4">
              {FORMATIONS_DATA.map((f, i) => (
                <div key={i} className="border-l-2 border-indigo-600 pl-4 py-1 space-y-1 bg-slate-50/50 p-4 rounded-r-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-bold text-slate-900 text-sm">{f.title}</h3>
                    <span className="text-xs font-semibold text-indigo-600">{f.org}</span>
                  </div>
                  <p className="text-xs text-slate-600">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Modal */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-between items-center">
          <span className="text-xs text-slate-500">Gueu Franck Chadel — Côte d'Ivoire</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-indigo-600 transition-colors shadow-sm"
          >
            Fermer le CV
          </button>
        </div>
      </div>
    </div>
  );
}
