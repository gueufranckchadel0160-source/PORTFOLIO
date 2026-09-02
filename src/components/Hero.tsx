import React from 'react';
import { ArrowRight, Download, MapPin, Sparkles, Smartphone, Palette, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenCV: () => void;
}

export default function Hero({ onOpenCV }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200/60">
      {/* Subtle background decorative elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-slate-100/80 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
              Basé en Côte d’Ivoire
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Concevoir des solutions <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">numériques</span> utiles & intuitives.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              Bonjour, je suis <strong className="font-semibold text-slate-900">Franck Chadel</strong>, étudiant en Informatique et Développement d’Applications, passionné par la conception d’interfaces modernes (UX/UI) et le développement d’applications mobiles Android.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projets"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-all shadow-sm group"
              >
                Voir mes projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenCV}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-semibold text-sm hover:border-slate-900 hover:bg-slate-50 transition-all shadow-xs"
              >
                <Download className="w-4 h-4 text-slate-500" />
                Télécharger mon CV
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-slate-700 font-semibold text-sm hover:text-indigo-600 transition-colors"
              >
                Me contacter
              </a>
            </div>

            {/* Highlights pills */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200/80">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
                  <Palette className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">UX/UI Design</h3>
                  <p className="text-[11px] text-slate-500">Wireframes & Prototypage</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Android Kotlin</h3>
                  <p className="text-[11px] text-slate-500">DigiFemmes Côte d'Ivoire</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-900">Développement</h3>
                  <p className="text-[11px] text-slate-500">Solutions Numériques</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold text-2xl italic shadow-md">
                    FC
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">Franck Chadel</h2>
                    <p className="text-xs text-indigo-600 font-semibold mt-0.5">Étudiant en Informatique & Développeur</p>
                    <p className="text-xs text-slate-500 mt-0.5">Côte d'Ivoire</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-600 mb-6">
                  <p className="leading-relaxed">
                    « Passionné par la conception d'interfaces modernes, l'expérience utilisateur et le développement mobile Android. »
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-medium text-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                    Formation DigiFemmes
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 font-semibold rounded-full text-[11px]">
                    Actif & Motivé
                  </span>
                </div>
              </div>

              {/* Floating secondary badge */}
              <div className="absolute -bottom-5 -left-5 bg-slate-900 text-white rounded-2xl p-4 shadow-xl border border-slate-800 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                    UX
                  </div>
                  <div>
                    <div className="text-xs font-bold">Approche centrée utilisateur</div>
                    <div className="text-[10px] text-slate-400">Simplicité & utilité</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
