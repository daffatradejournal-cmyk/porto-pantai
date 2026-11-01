import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  ArrowUpRight,
  ExternalLink,
  Lock,
  BookOpen,
  Layers,
  ChevronRight
} from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { projectsData } from '../../data/portfolioData';
import { ProjectPreviewPlaceholder } from './ProjectPreviewPlaceholder';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { AnimatedOceanSlideBackground } from './AnimatedOceanSlideBackground';

interface ProjectShowcaseProps {
  onOpenProject?: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenProject }) => {
  const [activeProjectId, setActiveProjectId] = useState<string>(projectsData[0]?.id || 'pasartembilahan');
  const [localActiveProject, setLocalActiveProject] = useState<Project | null>(null);

  const handleSelect = onOpenProject || setLocalActiveProject;
  const activeProjectModal = onOpenProject ? null : localActiveProject;

  const activeProject =
    projectsData.find((p) => p.id === activeProjectId) || projectsData[0];

  const activeIndex = projectsData.findIndex((p) => p.id === activeProject.id);
  const currentDepth = (activeIndex === 0 ? 1 : activeIndex === 1 ? 2 : 3) as 1 | 2 | 3;

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0284c7] select-none flex flex-col justify-between overflow-hidden"
    >
      {/* Dynamic ocean background */}
      <AnimatedOceanSlideBackground depthLevel={currentDepth} />

      {/* 1. Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-20 sm:pt-24 pb-4 sm:pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-4 sm:pb-6 border-b-2 border-[#0f172a]/20">
          <div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] w-fit mb-2 sm:mb-2.5">
              <Compass className="w-3.5 h-3.5 text-[#0f172a]" />
              <span>STUDI KASUS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white sm:text-[#0f172a] tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] sm:drop-shadow-none leading-[1.08]">
              Eksplorasi Proyek &amp; Rekayasa Sistem
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm font-medium text-white/90 sm:text-[#334155] leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] sm:drop-shadow-none">
            Pilih studi kasus di bawah untuk mengamati preview interaktif, arsitektur sistem, dan metrik performa teknis.
          </p>
        </div>
      </div>

      {/* 2. Main Stage (Split View: Buttons on Left, Rich Display on Right) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 pb-12 sm:pb-16 flex-1 flex flex-col justify-center">
        {/* Mobile Horizontal Selector */}
        <div className="flex lg:hidden items-center gap-2 overflow-x-auto no-scrollbar py-1 mb-4 w-full shrink-0">
          {projectsData.map((project, idx) => {
            const isSelected = activeProject.id === project.id;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveProjectId(project.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border-2 border-[#0f172a] text-xs font-mono transition-all shrink-0 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#fde047] text-[#0f172a] shadow-[3px_3px_0px_#0f172a] font-black -translate-y-0.5'
                    : 'bg-[#fffdf5]/95 hover:bg-[#fff9d4] text-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a] font-bold'
                }`}
              >
                <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-[#0f172a]/10">
                  0{idx + 1}
                </span>
                <span>{project.title}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
              </button>
            );
          })}
        </div>

        {/* Desktop Split View: Left List (5 cols), Right Inspection Card (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: 3 Project Cards */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-center space-y-3">
            {projectsData.map((project, idx) => {
              const isSelected = activeProject.id === project.id;

              return (
                <motion.div
                  key={project.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setActiveProjectId(project.id)}
                  className={`p-4 rounded-[22px] border-2 border-[#0f172a] cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#fde047] shadow-[5px_5px_0px_#0f172a] -translate-y-1'
                      : 'bg-[#fffdf5]/95 hover:bg-[#fff9d4] shadow-[3px_3px_0px_#0f172a]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-black text-[#0f172a] bg-[#fffdf5] px-2 py-0.5 rounded-md border border-[#0f172a]">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-mono font-bold text-[#0284c7]">
                        Sistem Informasi &amp; Web
                      </span>
                    </div>

                    <div className="flex items-center gap-1">
                      {project.isPrivateRepo ? (
                        <span className="text-[9.5px] font-mono font-bold text-[#b91c1c] bg-[#fee2e2] px-2 py-0.5 rounded-md border border-[#b91c1c]/40 flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          <span>Private</span>
                        </span>
                      ) : (
                        <span className="text-[9.5px] font-mono font-bold text-[#15803d] bg-[#dcfce7] px-2 py-0.5 rounded-md border border-[#16a34a]/40 flex items-center gap-1">
                          <ExternalLink className="w-2.5 h-2.5" />
                          <span>Open</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-[#0f172a] leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-[11px] font-mono font-bold text-[#8c6239] mt-1 line-clamp-1">
                        {project.metrics[0]?.value} • {project.metrics[1]?.value}
                      </p>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center border-2 border-[#0f172a] transition-all shrink-0 ${
                        isSelected
                          ? 'bg-[#0284c7] text-white shadow-[1.5px_1.5px_0px_#0f172a]'
                          : 'bg-[#fffdf5] text-[#0f172a]'
                      }`}
                    >
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Full Interactive Project Display */}
          <div className="w-full lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 12, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.99 }}
                transition={{ duration: 0.18 }}
                className="p-4 sm:p-6 rounded-2xl sm:rounded-[28px] bg-[#fffdf5] border-2 sm:border-3 border-[#0f172a] shadow-[6px_6px_0px_#0f172a] sm:shadow-[8px_8px_0px_#0f172a] flex flex-col justify-between space-y-3.5 sm:space-y-4"
              >
                {/* Browser preview mockup */}
                <div
                  onClick={() => handleSelect(activeProject)}
                  className="cursor-pointer group relative"
                >
                  <ProjectPreviewPlaceholder
                    project={activeProject}
                    isMobileFrame={false}
                    className="h-[210px] min-[400px]:h-[240px] sm:h-auto sm:aspect-[16/9] w-full shadow-[4px_4px_0px_#0f172a] transition-all duration-300 group-hover:scale-[1.01]"
                  />

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-xl bg-[#fde047] border-2 border-[#0f172a] text-xs font-mono font-black text-[#0f172a] shadow-[2px_2px_0px_#0f172a] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 pointer-events-none">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Buka Studi Kasus</span>
                  </div>
                </div>

                {/* Project Title, Role & Subtitle */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-[#0f172a] tracking-tight leading-tight">
                      {activeProject.title}
                    </h3>

                    <span className="text-[10px] sm:text-xs font-mono font-bold text-[#0284c7] bg-[#e0f2fe] px-2.5 py-1 rounded-lg border border-[#0284c7]/40">
                      {activeProject.role}
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs font-mono font-bold text-[#8c6239] leading-snug">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                  {activeProject.summary}
                </p>

                {/* 3 Metric cards */}
                <div className="grid grid-cols-3 gap-2">
                  {activeProject.metrics.map((m, mIdx) => {
                    const stickerBg =
                      mIdx === 0
                        ? 'bg-[#e0f2fe] border-[#0284c7]'
                        : mIdx === 1
                        ? 'bg-[#fef9c3] border-[#ca8a04]'
                        : 'bg-[#dcfce7] border-[#16a34a]';

                    const labelColor =
                      mIdx === 0
                        ? 'text-[#0369a1]'
                        : mIdx === 1
                        ? 'text-[#854d0e]'
                        : 'text-[#15803d]';

                    return (
                      <div
                        key={mIdx}
                        className={`p-1.5 sm:p-2.5 rounded-xl ${stickerBg} border-2 border-[#0f172a] text-center shadow-[2px_2px_0px_#0f172a] flex flex-col justify-center min-h-[46px] sm:min-h-[54px]`}
                      >
                        <div className={`text-[8.5px] sm:text-[10px] font-mono font-bold uppercase ${labelColor} leading-tight truncate`}>
                          {m.label}
                        </div>
                        <div className="text-[11px] sm:text-xs font-black text-[#0f172a] mt-0.5 leading-tight truncate">
                          {m.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                  {activeProject.stack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-lg bg-[#fff9d4] text-[10px] sm:text-[11px] font-mono font-bold text-[#0f172a] border border-[#0f172a]/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: Studi Kasus, Live Demo, GitHub */}
                <div className="pt-2 border-t-2 border-[#e2d3b3] flex flex-wrap items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => handleSelect(activeProject)}
                    className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-[11px] sm:text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] cursor-pointer transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Buka Studi Kasus</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {activeProject.demoUrl && (
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#fde047] hover:bg-[#facc15] text-[#0f172a] text-[11px] sm:text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2.5px_2.5px_0px_#0f172a] transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#fff9d4] hover:bg-[#faeed1] text-[#0f172a] text-[11px] sm:text-xs font-mono font-bold border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] transition-all hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none sm:ml-auto"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Local fallback modal */}
      {!onOpenProject && activeProjectModal && (
        <ProjectCaseStudyModal
          project={activeProjectModal}
          isOpen={!!activeProjectModal}
          onClose={() => setLocalActiveProject(null)}
        />
      )}
    </section>
  );
};
