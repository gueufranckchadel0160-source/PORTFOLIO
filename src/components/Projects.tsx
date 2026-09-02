import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data';
import ProjectDetailModal from './ProjectDetailModal';
import { FolderGit2, ArrowRight, Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projets" className="py-24 bg-slate-50/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              Réalisations & Études
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Mes projets
            </h2>
            <p className="text-slate-600 mt-3 text-base sm:text-lg max-w-2xl">
              Découvrez les projets réels réalisés ou étudiés par Franck, mettant en valeur la réflexion UX/UI, le développement Kotlin et la digitalisation citoyenne en Côte d'Ivoire.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-medium bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm">
            ✨ Cliquez sur une carte pour voir les détails complets
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col cursor-pointer group"
            >
              {/* Card Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-xs text-slate-900 text-xs font-bold rounded-full shadow-xs">
                  {project.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1">
                    {project.category}
                  </p>
                  <p className="text-sm text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Badges Preview */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {project.tools.slice(0, 2).map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[11px] font-medium rounded-lg"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 2 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-500 text-[11px] font-medium rounded-lg">
                        +{project.tools.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:bg-indigo-600 transition-colors shadow-xs">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
