import React from 'react';
import { SKILLS_DATA } from '../data';
import { Palette, Smartphone, Code, Check } from 'lucide-react';

export default function Skills() {
  return (
    <section id="competences" className="py-24 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Code className="w-3.5 h-3.5" />
            Expertises & Savoir-faire
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Mes compétences
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Un aperçu structuré des compétences acquises en UX/UI, en développement mobile natif et en informatique générale.
          </p>
        </div>

        {/* 3 Visual Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Category 1: UX/UI Design */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">UX/UI Design</h3>
              <p className="text-xs text-slate-500 mb-6">Conception d'expériences et interfaces centrées sur l'utilisateur.</p>
              
              <ul className="space-y-3">
                {SKILLS_DATA.uxui.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-indigo-600 uppercase tracking-wider">
                Focus : Ergonomie & Esthétique
              </span>
            </div>
          </div>

          {/* Category 2: Développement mobile */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Développement mobile</h3>
              <p className="text-xs text-slate-500 mb-6">Applications Android natives, Kotlin & Services Cloud Firebase.</p>
              
              <ul className="space-y-3">
                {SKILLS_DATA.mobile.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider">
                Formation DigiFemmes CI
              </span>
            </div>
          </div>

          {/* Category 3: Développement web et informatique */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Développement web et info</h3>
              <p className="text-xs text-slate-500 mb-6">Fondamentaux informatiques, langages web et bases de données.</p>
              
              <ul className="space-y-3">
                {SKILLS_DATA.webIt.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">
                Études & Pratiques Académiques
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
