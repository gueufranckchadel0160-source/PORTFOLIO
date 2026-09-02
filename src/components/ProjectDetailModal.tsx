import React from 'react';
import { Project } from '../data';
import { X, Layers, AlertCircle, CheckCircle, Wrench, BookOpen, ExternalLink } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-neutral-200 relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-neutral-900 flex items-center justify-center transition-colors shadow-lg focus:outline-none"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
              {project.badge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-neutral-300 mt-1">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Contexte */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
              <Layers className="w-4 h-4" />
              Contexte du projet
            </div>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60">
              {project.context}
            </p>
          </div>

          {/* Problème ou besoin */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
              <AlertCircle className="w-4 h-4" />
              Problème ou besoin identifié
            </div>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60">
              {project.problem}
            </p>
          </div>

          {/* Solution proposée */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
              <CheckCircle className="w-4 h-4" />
              Solution proposée
            </div>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed bg-neutral-50 p-4 rounded-2xl border border-neutral-200/60">
              {project.solution}
            </p>
          </div>

          {/* Outils & technologies */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
              <Wrench className="w-4 h-4" />
              Outils et technologies utilisés
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-neutral-100 text-neutral-800 text-xs font-semibold border border-neutral-200/80"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Ce que Franck a appris */}
          <div className="space-y-2 pt-2 border-t border-neutral-100">
            <div className="flex items-center gap-2 text-purple-600 font-bold text-sm">
              <BookOpen className="w-4 h-4" />
              Ce que Franck a appris
            </div>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
              {project.learnings}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-neutral-900 text-white font-semibold text-sm hover:bg-indigo-600 transition-colors"
          >
            Fermer les détails
          </button>
        </div>
      </div>
    </div>
  );
}
