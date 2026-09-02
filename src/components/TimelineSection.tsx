import React from 'react';
import { TIMELINE_DATA, FORMATIONS_DATA } from '../data';
import { GraduationCap, Briefcase, Award, ArrowUpRight } from 'lucide-react';

export default function TimelineSection() {
  return (
    <section id="formations" className="py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Parcours & Cursus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Formations & Timeline
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Mon évolution académique et mes formations spécialisées en Côte d'Ivoire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Detailed Formations */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5 mb-6">
              <Award className="w-5 h-5 text-indigo-600" />
              Formations clés
            </h3>

            <div className="space-y-6">
              {FORMATIONS_DATA.map((formation, index) => (
                <div
                  key={index}
                  className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-indigo-200 transition-all space-y-3 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                      {formation.title}
                    </h4>
                    <span className="shrink-0 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-indigo-600 shadow-xs">
                      {formation.org}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {formation.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5 mb-6">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              Évolution professionnelle
            </h3>

            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200">
              {TIMELINE_DATA.map((item) => (
                <div key={item.step} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center font-bold text-[10px] text-indigo-600 shadow-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {item.step}
                  </div>

                  <div className="bg-slate-50/60 p-6 rounded-3xl border border-slate-200/80 hover:bg-white transition-all shadow-sm">
                    <h4 className="font-bold text-slate-900 text-base mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
