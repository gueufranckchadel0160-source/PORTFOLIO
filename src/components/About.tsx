import React from 'react';
import { User, BookOpen, Target, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            À propos de moi
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Profil & Parcours personnel
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Découvrez qui je suis et ma vision du développement numérique en Côte d'Ivoire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Detailed Bio */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-slate-900 text-xl leading-snug">
              Franck Chadel est un étudiant en Informatique et Développement d’Applications, passionné par la conception d’interfaces modernes, l’expérience utilisateur (UX/UI) et le développement d’applications mobiles Android.
            </p>

            <p>
              Il a suivi une formation spécialisée en <strong className="text-slate-900 font-semibold">UX/UI Design</strong>, puis une formation approfondie en <strong className="text-slate-900 font-semibold">développement d’applications mobiles Android avec Kotlin chez DigiFemmes Côte d’Ivoire</strong>.
            </p>

            <p className="text-slate-600">
              Son objectif est de développer progressivement son expertise dans la conception et le développement de solutions numériques utiles, simples à utiliser et adaptées aux besoins des utilisateurs.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 mb-2">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  Formation & Diplômes
                </div>
                <p className="text-sm text-slate-600">
                  Études en Informatique, formation UX/UI Design et cursus Android Kotlin chez DigiFemmes CI.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-sm">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 mb-2">
                  <Target className="w-4 h-4 text-indigo-600" />
                  Vision & Ambition
                </div>
                <p className="text-sm text-slate-600">
                  Créer des produits numériques intuitifs et adaptés aux réalités des utilisateurs en Côte d'Ivoire.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" />
              Piliers de compétences
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">UX/UI Design</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Wireframes, prototypage et conception d'interfaces centrées utilisateur.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Développement Mobile Android</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Kotlin, Android Studio, Firebase (Auth, Firestore, FCM) et cycle de vie.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Développement Web & Informatique</h4>
                  <p className="text-xs text-slate-500 mt-0.5">HTML, CSS, JavaScript, SQL, bases de données et notions logicielles.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-center">
              <span className="text-xs text-slate-500 font-medium">
                📍 Basé en Côte d’Ivoire • Ouvert aux opportunités d'apprentissage et projets numériques
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
