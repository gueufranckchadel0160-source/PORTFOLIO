import React, { useState } from 'react';
import { CONTACT_INFO } from '../data';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      // Reset or keep success state
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Travaillons ensemble
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Vous souhaitez me contacter pour un projet, un stage ou une collaboration en Côte d’Ivoire ou à distance ? Écrivez-moi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900">
                Coordonnées & Réseaux
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-indigo-200 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Email</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {CONTACT_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Téléphone</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {CONTACT_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Localisation</span>
                    <span className="text-sm sm:text-base font-bold text-slate-900">
                      {CONTACT_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors text-xs font-bold shadow-sm"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors text-xs font-bold shadow-xs"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message envoyé !</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Merci pour votre message. Franck Chadel vous répondra dans les plus brefs délais à l'adresse email indiquée.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Envoyez-moi un message
                  </h3>
                  <p className="text-xs text-slate-500">
                    Remplissez ce formulaire pour me contacter directement.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Kouassi Jean"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Votre Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ex: jean.kouassi@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all shadow-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Votre Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discutons de votre projet, d'une opportunité ou d'une collaboration..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition-all resize-none shadow-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-all shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
