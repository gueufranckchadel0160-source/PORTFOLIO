import React from 'react';
import { Target, Quote, Sparkles } from 'lucide-react';

export default function Objectives() {
  return (
    <section id="objectif" className="py-24 bg-white border-b border-slate-200/60 relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5" />
            Vision & Ambition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Objectif professionnel
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Mon cap pour l'avenir du numérique et du développement d'applications.
          </p>
        </div>

        {/* Objective Card */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 text-indigo-500/20 pointer-events-none">
            <Quote className="w-24 h-24 sm:w-32 sm:h-32" />
          </div>

          <div className="relative z-10 space-y-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Engagement professionnel
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium leading-relaxed tracking-tight text-slate-100">
              “Je souhaite continuer à développer mes compétences en UX/UI et en développement d'applications afin de concevoir des produits numériques utiles, intuitifs et accessibles. Mon objectif est de progresser constamment en combinant design, technologie et compréhension des besoins utilisateurs.”
            </blockquote>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="font-bold text-base block text-white">Franck Chadel</span>
                <span className="text-xs text-indigo-300">Étudiant en Informatique & Développeur • Côte d’Ivoire</span>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-xs text-xs font-semibold text-slate-200">
                Design & Code
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
