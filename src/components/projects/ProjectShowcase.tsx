import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowDown,
  Compass,
  Sparkles
} from 'lucide-react';
import type { Project, ProjectCategory } from '../../types/portfolio';
import { projectsData } from '../../data/portfolioData';
import { FlagshipSlideCard } from './FlagshipProjectParallax';
import { FilteredProjectDock } from './FilteredProjectDock';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';
import { AnimatedOceanSlideBackground } from './AnimatedOceanSlideBackground';

interface ProjectShowcaseProps {
  onOpenProject?: (project: Project) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenProject }) => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [localActiveProject, setLocalActiveProject] = useState<Project | null>(null);

  const handleSelect = onOpenProject || setLocalActiveProject;
  const activeProject = onOpenProject ? null : localActiveProject;

  // featured flagship projects
  const flagshipProjects = projectsData.filter((p) => p.featured);
  const totalSlides = flagshipProjects.length + 1; // 3 flagship + 1 index overview

  const goToSlide = useCallback((newIndex: number) => {
    setDirection(newIndex > activeSlide ? 1 : -1);
    setActiveSlide(newIndex);
  }, [activeSlide]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  // auto-cruise timer (pauses when user hovers or interacts)
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, handleNext]);

  // keyboard arrow navigation when section is in viewport
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ignore if modal is open or typing in an input
      if (document.querySelector('[role="dialog"]') || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // swipe drag gesture handler
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -50) {
      handleNext();
    } else if (info.offset.x > 50) {
      handlePrev();
    }
  };

  // dynamic ocean depth per slide
  const currentDepth = (
    activeSlide === 0 ? 1 : activeSlide === 1 ? 2 : activeSlide === 2 ? 3 : 4
  ) as 1 | 2 | 3 | 4;

  // slide motion variants for smooth direction-aware transitions
  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '40%' : '-40%',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.22 },
        scale: { duration: 0.22 }
      }
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '40%' : '-40%',
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: 'spring' as const, stiffness: 320, damping: 32 },
        opacity: { duration: 0.18 },
        scale: { duration: 0.18 }
      }
    })
  };

  const scrollToNextSection = () => {
    const stackEl = document.getElementById('stack');
    if (stackEl) {
      stackEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[820px] lg:min-h-screen bg-[#0284c7] select-none py-4 sm:py-6 flex flex-col justify-between overflow-hidden"
    >
      {/* dynamic ocean background based on active slide depth */}
      <AnimatedOceanSlideBackground depthLevel={currentDepth} />

      {/* 1. Coastal Control Deck Header Bar */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-20 sm:pt-24 pb-2">
        <div className="p-3 sm:p-4 rounded-2xl sm:rounded-[24px] bg-[#fffdf5]/95 backdrop-blur-md border-2 border-[#0f172a] shadow-[4px_4px_0px_#0f172a] sm:shadow-[6px_6px_0px_#0f172a] flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          
          {/* Left: Section identifier */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#fde047] text-[#0f172a] text-xs font-mono font-black border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a]">
              <Compass className="w-3.5 h-3.5 text-[#0f172a]" />
              <span>02 // STUDI KASUS</span>
            </div>
            <span className="text-xs font-mono font-bold text-[#0f172a] hidden sm:inline-block">
              Dermaga Rekayasa Sistem &amp; Solusi Digital
            </span>
          </div>

          {/* Center: Interactive Project Dock Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-0.5 w-full lg:w-auto">
            {flagshipProjects.map((p, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 border-[#0f172a] text-xs font-mono font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#0284c7] text-white shadow-[2.5px_2.5px_0px_#0f172a] font-black -translate-y-0.5'
                      : 'bg-[#fff9d4] hover:bg-[#faeed1] text-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a]'
                  }`}
                >
                  <span
                    className={`text-[10px] px-1 py-0.2 rounded font-black ${
                      isActive ? 'bg-white/30 text-white' : 'bg-[#0f172a]/10 text-[#0f172a]'
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span>{p.title}</span>
                </button>
              );
            })}

            {/* Tab 4: Indeks Proyek */}
            <button
              type="button"
              onClick={() => goToSlide(3)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border-2 border-[#0f172a] text-xs font-mono font-bold transition-all shrink-0 cursor-pointer ${
                activeSlide === 3
                  ? 'bg-[#0284c7] text-white shadow-[2.5px_2.5px_0px_#0f172a] font-black -translate-y-0.5'
                  : 'bg-[#fff9d4] hover:bg-[#faeed1] text-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a]'
              }`}
            >
              <span
                className={`text-[10px] px-1 py-0.2 rounded font-black ${
                  activeSlide === 3 ? 'bg-white/30 text-white' : 'bg-[#0f172a]/10 text-[#0f172a]'
                }`}
              >
                04
              </span>
              <span>Indeks Rekayasa</span>
            </button>
          </div>

          {/* Right: Tactile Prev/Next, Clickable Pills & Auto-Cruise */}
          <div className="flex items-center justify-between lg:justify-end gap-2 sm:gap-2.5">
            {/* Slide counter */}
            <div className="text-[11px] font-mono font-black text-[#0f172a] px-2.5 py-1 rounded-xl bg-[#faeed1] border border-[#0f172a] shrink-0">
              {activeSlide < 3 ? `FLAGSHIP ${activeSlide + 1} / 3` : 'INDEKS REKAYASA'}
            </div>

            {/* Navigation buttons & progress pills */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                title="Studi Kasus Sebelumnya (Panah Kiri)"
                className="w-8 h-8 rounded-xl bg-[#fffdf5] hover:bg-[#fde047] text-[#0f172a] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Clickable progress pills */}
              <div className="flex items-center gap-1 px-2 py-1.5 rounded-xl bg-[#faeed1] border border-[#0f172a]">
                {[0, 1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goToSlide(idx)}
                    title={`Beralih ke slide 0${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeSlide === idx
                        ? 'w-6 bg-[#0284c7] border border-[#0f172a]'
                        : 'w-2.5 bg-[#0f172a]/20 hover:bg-[#0f172a]/50'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                title="Studi Kasus Selanjutnya (Panah Kanan)"
                className="w-8 h-8 rounded-xl bg-[#fffdf5] hover:bg-[#fde047] text-[#0f172a] border-2 border-[#0f172a] shadow-[2px_2px_0px_#0f172a] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 flex items-center justify-center transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Auto cruise toggle */}
              <button
                type="button"
                onClick={() => setIsAutoPlaying((prev) => !prev)}
                title={isAutoPlaying ? 'Jeda Mode Berlayar Otomatis' : 'Aktifkan Mode Berlayar Otomatis'}
                className={`hidden sm:flex items-center gap-1 px-2 py-1 rounded-xl border border-[#0f172a] text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  isAutoPlaying
                    ? 'bg-[#dcfce7] text-[#15803d] border-[#16a34a]'
                    : 'bg-[#fffdf5] text-[#64748b] hover:text-[#0f172a]'
                }`}
              >
                {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isAutoPlaying ? 'Auto' : 'Auto'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Stage with Direction-Aware AnimatePresence */}
      <div className="relative z-20 flex-1 flex items-center justify-center w-full min-h-[500px] overflow-hidden my-auto py-2">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={handleDragEnd}
            className="w-full h-full flex items-center justify-center"
          >
            {activeSlide < 3 && flagshipProjects[activeSlide] ? (
              <FlagshipSlideCard
                project={flagshipProjects[activeSlide]}
                index={activeSlide}
                depthLevel={currentDepth as 1 | 2 | 3}
                hideBackground={true}
                onSelectProject={handleSelect}
              />
            ) : (
              <FilteredProjectDock
                projects={projectsData}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                onSelectProject={handleSelect}
                hideBackground={true}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Tactile Footer Navigation Hint & Scroll Anchor */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-8 pt-2 pb-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2 rounded-2xl bg-[#fffdf5]/90 backdrop-blur-sm border border-[#0f172a]/30 shadow-[2px_2px_0px_#0f172a]">
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#0f172a]">
            <Sparkles className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
            <span>
              <strong>Tip Navigasi:</strong> Klik tab dermaga, panah keyboard <kbd className="px-1.5 py-0.5 rounded bg-[#faeed1] border border-[#0f172a]/40 font-bold">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-[#faeed1] border border-[#0f172a]/40 font-bold">→</kbd>, atau geser (swipe) untuk beralih proyek.
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToNextSection}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#fff9d4] hover:bg-[#fde047] text-[#0f172a] text-[11px] font-mono font-bold border border-[#0f172a] shadow-[1.5px_1.5px_0px_#0f172a] transition-all cursor-pointer shrink-0"
          >
            <span>Lanjut ke Tech Stack</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* local fallback case study modal */}
      {!onOpenProject && activeProject && (
        <ProjectCaseStudyModal
          project={activeProject}
          isOpen={!!activeProject}
          onClose={() => setLocalActiveProject(null)}
        />
      )}
    </section>
  );
};
